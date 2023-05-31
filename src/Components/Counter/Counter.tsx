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

   const warningMax = value === maxValue

    return (
        <div className={s.counter}>
            <Scoreboard
                value={value}
                onSettings={onSettings}
                errorBothValues={errorBothValues}
                errorStartValue={errorStartValue}
                warningMax={warningMax}
            />
            <Button
                title='inc'
                callback={incValue}
                dis={warningMax|| onSettings}
            />
            <Button
                title='res'
                callback={resValue}
                dis={onSettings}
            />
        </div>
    );
}