import React from 'react';
import s from './Counter.module.css';
import {Button} from "./Button";

type CounterPropsType = {
    value: number
    setValue: (value: number) => void
    maxValue: number
    error: boolean
    startValue: number
    disabledInc: boolean
    setDisabledInc: (arg0: boolean) => void
    disabledReset: boolean
    setDisabledReset: (arg0: boolean) => void
    inputText: boolean
}
export const Counter = (props: CounterPropsType) => {

    const increment = () => {
        if (props.value >= props.startValue && props.value < props.maxValue) {
            props.setValue(props.value + 1)
            props.setDisabledReset(false)
        }
        if (props.value >= props.maxValue - 1) {
            props.setDisabledInc(true)
        }
    }
    const reset = () => {
        if (props.value !== props.startValue) {
            props.setValue(props.startValue)
            props.setDisabledReset(true)
            props.setDisabledInc(false)
        }
    }
    const counterStyle = `${props.value === props.maxValue ? s.counterRed : s.counter}`

    return (
        <div className={s.wrapper}>
            <div className={s.counterWrapper}>
                {props.error
                    ?
                    <div className={s.error}>{'Incorrect value!'}</div>
                    :
                    <div className={counterStyle}>{props.inputText ?
                        <span className={s.span}>enter values and press "set"</span> : props.value}</div>}

                <div className={s.buttonWrapper}>
                    <Button name={'inc'} callBack={increment} disabled={props.disabledInc}/>
                    <Button name={'reset'} callBack={reset} disabled={props.disabledReset}/>
                </div>
            </div>
        </div>
    );
};

