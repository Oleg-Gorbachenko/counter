import React, {ChangeEvent} from 'react';
import s from "./Settings.module.css";
import {Button} from "./Button";

type SettingsPropsType = {
    value: number
    setValue: (value: number) => void
    startValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    startValue: number
    maxValue: number
    onSetClick: () => void
    maxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    disabledSet: boolean
    setDisabledSet: (arg0: boolean) => void
    error: boolean
}

export const Settings = (props: SettingsPropsType) => {

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.startValueHandler(e)
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxValueHandler(e)
    }
    const inputStyle = `${props.error ? s.inputRed : s.input}`
    return (
        <div className={s.wrapper}>
            <div className={s.counterWrapper}>
                <div className={s.buttonWrapper}>
                    <div className={s.inputWrapper}>
                        <div className={s.inputText}>{'max value:'}</div>
                        <input
                            value={props.maxValue}
                            onChange={onChangeMaxValueHandler}
                            className={inputStyle}
                            type="number"
                        />
                    </div>
                    <div className={s.inputWrapper}>
                        <div className={s.inputText}>{'start value:'}</div>
                        <input
                            max={props.maxValue}
                            value={props.startValue}
                            onChange={onChangeStartValueHandler}
                            className={inputStyle}
                            type="number"/>
                    </div>
                </div>
                <div className={s.buttonWrapper}>
                    <Button name={'set'} callBack={props.onSetClick} disabled={props.disabledSet}/>
                </div>
            </div>
        </div>
    );
};