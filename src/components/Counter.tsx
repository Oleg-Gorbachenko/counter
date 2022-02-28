import React, {useState} from 'react';
import {Button} from "./Button";
import s from './Counter.module.css';

export const Counter = () => {
    let [value, setValue] = useState<number>(0)
    let [disabled, setDisabled] = useState<boolean>(false)
    const increment = () => {
        setValue(value++)
    }
    const reset = () => {
        if (value !== 0) {
            setValue(0)
        } else setDisabled(true)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
                <div className={s.value}>{value}</div>
            </div>
            <div className={s.button_wrapper}>
                <Button name={'inc'} disabled={disabled} callBack={increment}/>
                <Button name={'reset'} disabled={disabled} callBack={reset}/>
            </div>
        </div>
    );
};

