import {combineReducers, createStore} from "redux";
import {appReducer} from "../reducers/app-reducer";


const rootReducer = combineReducers({
    appState: appReducer,
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>