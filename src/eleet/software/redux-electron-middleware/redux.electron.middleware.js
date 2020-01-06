import { ipcRenderer } from "electron"
import { SET_STATE } from "../constants/constants"

/**
 * @desc middleware to be added to your store
 * @param {Object} store - this is the redux store
 * @returns {Function}
 */
export const reduxElectronMiddleware = store => next => (action) => {
    const nextState = next(action)
    ipcRenderer.send(SET_STATE, store.getState())
    return nextState
}
