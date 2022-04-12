import {combineReducers, createStore} from "redux";
import {appReducer} from "../reducers/app-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";


const rootReducer = combineReducers({
    appState: appReducer,
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        appState: store.getState().appState
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>