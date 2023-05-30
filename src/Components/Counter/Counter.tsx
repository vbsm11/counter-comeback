import React from 'react';
import {Scoreboard} from './Scoreboard';
import {Button} from '../Button';
import s from './Counter.module.css'

type CounterPropsType = {
    value: number
    onSettings: boolean
    errorBothValues: boolean
    errorStartValue: boolean
    maxValue: number
    incValue: () => void
    resValue: () => void
}

export const Counter: React.FC<CounterPropsType> = ({value, onSettings, errorBothValues,  errorStartValue, maxValue, incValue, resValue}) => {


    return (
        <div className={s.counter}>
            <Scoreboard
                value={value}
                onSettings={onSettings}
                errorBothValues={errorBothValues}
                errorStartValue={errorStartValue}
            />
            <Button
                title='inc'
                callback={incValue}
                dis={value >= maxValue || onSettings}
            />
            <Button
                title='res'
                callback={resValue}
                dis={onSettings}
            />
        </div>
    );
}