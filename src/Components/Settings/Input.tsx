import React, {ChangeEvent} from 'react';
import s from './Settings.module.css'

type InputPropsType = {
    text: string
    value: number
    setValue: (v: number) => void
    error: boolean
}

export const Input: React.FC<InputPropsType> = ({text, value, setValue, error}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
    }

    const classes = error? `${s.input} ${s.error}`: s.input

    return (
        <div className={s.inputComponent}>
            {text}
            <input
                type="number"
                value={value}
                className={classes}
                onChange={onChangeHandler}
            />
        </div>

    )
}