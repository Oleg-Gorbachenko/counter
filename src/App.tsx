import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.module.css';
import {Counter} from "./components/Counter";
import styles from "./App.module.css";
import {Settings} from "./components/Settings";

function App() {
    const [value, setValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const [disabledInc, setDisabledInc] = useState<boolean>(false)
    const [disabledReset, setDisabledReset] = useState<boolean>(false)
    const [disabledSet, setDisabledSet] = useState<boolean>(true)
    const [inputText, setInputText] = useState<boolean>(false)

    useEffect(() => {
        let StartValueAsString = localStorage.getItem('startValue')
        if (StartValueAsString) {
            let newValue = JSON.parse(StartValueAsString)
            setStartValue(newValue)
        }
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newValue = JSON.parse(maxValueAsString)
            setMaxValue(newValue)
        }
        let valueAsString = localStorage.getItem('value')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('value', JSON.stringify(value))
    }, [startValue, maxValue, value])

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let eventValue = Number(e.currentTarget.value)
        if (eventValue < 0 || eventValue >= maxValue) {
            setError(true)
            setDisabledInc(true)
            setDisabledReset(true)
            setDisabledSet(true)
        } else {
            setError(false)
            setDisabledSet(false)
            setInputText(true)
        }
        setStartValue(eventValue)
    }
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let eventValue = Number(e.currentTarget.value)
        if (eventValue <= startValue) {
            setError(true)
            setDisabledSet(true)
            setDisabledInc(true)
            setDisabledReset(true)
        } else {
            setDisabledSet(false)
            setError(false)
            setInputText(true)
        }
        setMaxValue(eventValue)
    }
    const onSetClick = () => {
        setDisabledSet(true)
        setMaxValue(maxValue)
        setValue(startValue)
        setDisabledInc(false)
        setInputText(false)
        console.log('Записал в локалстор')
    }
    return (
        <div className={styles.wrapper}>
            <Settings
                value={value}
                setValue={setValue}
                startValueHandler={startValueHandler}
                startValue={startValue}
                maxValue={maxValue}
                onSetClick={onSetClick}
                maxValueHandler={maxValueHandler}
                disabledSet={disabledSet}
                setDisabledSet={setDisabledSet}
                error={error}
            />
            <Counter
                value={value}
                setValue={setValue}
                maxValue={maxValue}
                error={error}
                startValue={startValue}
                disabledInc={disabledInc}
                setDisabledInc={setDisabledInc}
                disabledReset={disabledReset}
                setDisabledReset={setDisabledReset}
                inputText={inputText}
            />
        </div>
    );
}

export default App;
