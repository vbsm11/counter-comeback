import {ChangeEvent} from 'react';

export type SetStartEndValuePropsType = {
    text: string
    value: number
    setValue: (value: number) => void
    setScoreValue?: (value: number) => void
}

export const SetStartEndValue = (props: SetStartEndValuePropsType) => {

    const setValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(Number(e.currentTarget.value));
        props.setScoreValue && props.setScoreValue(Number(e.currentTarget.value))
    }

    return (
        <div className={'setter'}>
            {props.text}
            <input
                type="range"
                min={0}
                max={100}
                value={props.value}
                className={'input'}
                onChange={setValueHandler}
            />
            {props.value}
        </div>
    )
}