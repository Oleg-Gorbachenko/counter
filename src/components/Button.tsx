import React from 'react';
import s from "./Counter.module.css";

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (
        <button className={s.button} onClick={onClickButtonHandler}  disabled={props.disabled}>
            {props.name}
        </button>
    );
};

