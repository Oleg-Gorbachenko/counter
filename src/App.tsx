import React, {ChangeEvent} from 'react';
import './App.module.css';
import {Counter} from "./components/Counter";
import styles from "./App.module.css";
import {Settings} from "./components/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {
    setMaxValueAC,
    setStartValueAC,
    setValuesInCounterAC,
    valueIsNotPermissibleAC,
    valueIsPermissibleAC
} from "./reducers/app-reducer";

function App() {

    const value = useSelector<AppRootStateType, number>(state => state.appState.value)
    const startValue = useSelector<AppRootStateType, number>(state => state.appState.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.appState.maxValue)
    const error = useSelector<AppRootStateType, boolean>(state => state.appState.error)
    const disabledInc = useSelector<AppRootStateType, boolean>(state => state.appState.disabledInc)
    const disabledReset = useSelector<AppRootStateType, boolean>(state => state.appState.disabledReset)
    const disabledSet = useSelector<AppRootStateType, boolean>(state => state.appState.disabledSet)
    const inputText = useSelector<AppRootStateType, boolean>(state => state.appState.inputText)

    const dispatch = useDispatch()

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let eventValue = Number(e.currentTarget.value)
        if (eventValue < 0 || eventValue >= maxValue) {
            dispatch(valueIsNotPermissibleAC())
        } else {
            dispatch(valueIsPermissibleAC())
        }
        dispatch(setStartValueAC(eventValue))
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let eventValue = Number(e.currentTarget.value)
        if (eventValue <= startValue) {
            dispatch(valueIsNotPermissibleAC())
        } else {
            dispatch(valueIsPermissibleAC())
        }
        dispatch(setMaxValueAC(eventValue))
    }
    const onSetClick = () => {
        dispatch(setValuesInCounterAC(startValue, maxValue))
        console.log('Записал в локалстор')
    }

    return (
        <div className={styles.wrapper}>
            <Settings
                value={value}
                startValueHandler={startValueHandler}
                startValue={startValue}
                maxValue={maxValue}
                onSetClick={onSetClick}
                maxValueHandler={maxValueHandler}
                disabledSet={disabledSet}
                error={error}
            />
            <Counter
                value={value}
                maxValue={maxValue}
                error={error}
                startValue={startValue}
                disabledInc={disabledInc}
                disabledReset={disabledReset}
                inputText={inputText}
            />
        </div>
    );
}

export default App;
