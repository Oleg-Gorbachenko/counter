import React from 'react';
import s from "./Counter.module.css";

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
}
export const Button = (props: ButtonPropsType) => {
    return (
        <button className={s.button} onClick={props.callBack} disabled={props.disabled}>
            {props.name}
        </button>
    );
};

