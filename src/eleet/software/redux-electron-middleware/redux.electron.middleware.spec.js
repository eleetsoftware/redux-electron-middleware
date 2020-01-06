import electron from "electron"
import { reduxElectronMiddleware } from "./redux.electron.middleware"

jest.mock("electron", () => ({
    ipcRenderer: jest.fn(() => ({
        send: jest.fn()
    })),
}))
describe("#reduxElectronMiddleware", () => {
    it("should pass the intercepted action to next and send the action to electron", () => {
        electron.ipcRenderer.send = jest.fn()
        const nextArgs = []
        const fakeNext = (...args) => { nextArgs.push(args) }
        const fakeStore = {
            getState: jest.fn()
        }
        const action = { type: "INC" }
        reduxElectronMiddleware(fakeStore)(fakeNext)(action)
        expect(fakeStore.getState).toHaveBeenCalled()
        expect(electron.ipcRenderer.send).toHaveBeenCalled()
    })
})
