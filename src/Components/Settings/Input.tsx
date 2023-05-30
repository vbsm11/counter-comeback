import React, {ChangeEvent} from 'react';

type InputPropsType = {
    text: string
    value: number
    setValue: (v: number) => void
    setOnSettings: (onSettings: boolean) => void
    error: boolean
}

export const Input: React.FC<InputPropsType> = ({text, value, setValue, setOnSettings, error}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
        setOnSettings(true)
    }

    return (
        <div>
            {text}
            <input
                type="number"
                value={value}
                className={'input'}
                onChange={onChangeHandler}
            />
        </div>

    )
}