import { ipcRenderer } from "electron"
import { ACTION } from "../constants/constants"

/**
 * @desc middleware to be added to your store
 * @returns {Function}
 */
export const reduxElectronActionMiddleware = () => next => (action) => {
    const nextState = next(action)
    ipcRenderer.send(ACTION, nextState)
    return nextState
}
