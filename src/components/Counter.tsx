import React, {useState} from 'react';
import s from './Counter.module.css';
import {Button} from "./Button";

export const Counter = () => {
    const [value, setValue] = useState<number>(0)
    const [disabledInc, setDisabledInc] = useState<boolean>(false)
    const [disabledReset, setDisabledReset] = useState<boolean>(true)
    const increment = () => {
        if (value >= 0 && value < 5) {
            setValue(value + 1)
            setDisabledReset(false)
        }
        if (value >= 4) {
            setDisabledInc(true)
        }
    }
    const reset = () => {
        if (value !== 0) {
            setValue(0)
            setDisabledReset(true)
            setDisabledInc(false)
        }
    }
    const counterStyle = `${value === 5 ? s.counterRed : s.counter}`

    return (
        <div className={s.wrapper}>
            <div className={s.counterWrapper}>
                <div className={counterStyle}>{value}</div>
                <div className={s.buttonWrapper}>
                    <Button name={'inc'} callBack={increment} disabled={disabledInc}/>
                    <Button name={'reset'} callBack={reset} disabled={disabledReset}/>
                </div>
            </div>
        </div>
    );
};

