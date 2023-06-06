import React from 'react';
import {Scoreboard} from './Scoreboard';
import {Button} from '../Button';
import s from './Counter.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {CounterStateType, incValueAC, resValueAC} from '../../state/counter-reducer';
import {AppRootStateType} from '../../state/store';
import {setOnSettingsAC} from '../../state/settings-reducer';


export const Counter: React.FC = () => {

    const {maxValue, currentValue} = useSelector<AppRootStateType, CounterStateType>(state => state.counterState)

    const warningMax = currentValue === maxValue

    const dispatch = useDispatch()

    const incCallBack = () => {
        dispatch(incValueAC())
    }

    const resCallBack = () => {
        dispatch(resValueAC())
    }

    const setCallBack = () => {
        dispatch(setOnSettingsAC(true))
    }

    return (
        <div className={s.counter}>
            <Scoreboard
                value={currentValue}
                warningMax={warningMax}
            />
            <Button
                title="inc"
                callback={incCallBack}
                dis={warningMax}
            />
            <Button
                title="res"
                callback={resCallBack}
            />
            <Button
                title="set"
                callback={setCallBack}
            />
        </div>
    );
}