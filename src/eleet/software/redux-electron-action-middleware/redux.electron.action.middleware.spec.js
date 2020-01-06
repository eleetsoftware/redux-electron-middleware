import electron from "electron"
import { reduxElectronActionMiddleware } from "./redux.electron.action.middleware"

jest.mock("electron", () => ({
    ipcRenderer: jest.fn(() => ({
        send: jest.fn()
    })),
}))
describe("#reduxElectronActionMiddleware", () => {
    it("should pass the intercepted action to next and send the action to electron", () => {
        electron.ipcRenderer.send = jest.fn()
        const nextArgs = []
        const fakeNext = (...args) => { nextArgs.push(args) }
        const fakeStore = {}
        const action = { type: "INC" }
        reduxElectronActionMiddleware(fakeStore)(fakeNext)(action)

        expect(electron.ipcRenderer.send).toHaveBeenCalled()
    })
})
