import React from 'react';
import {Button} from '../Button';
import {Input} from './Input';
import s from './Settings.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {setStartAndMaxValueAC} from '../../state/counter-reducer';
import {setOnSettingsAC, setPrevMaxValueAC, setPrevStartValueAC, SettingsStateType} from '../../state/settings-reducer';
import {AppRootStateType} from '../../state/store';

export const Settings: React.FC = () => {

    const {prevStartValue, prevMaxValue} = useSelector<AppRootStateType, SettingsStateType>(state => state.settingsState)

    const errorBothValues: boolean = prevStartValue >= prevMaxValue
    const errorStartValue: boolean = prevStartValue < 0

    const dis = errorBothValues || errorStartValue

    const dispatch = useDispatch()

    const setCallBack = () => {
        dispatch(setStartAndMaxValueAC(prevStartValue, prevMaxValue))
        dispatch(setOnSettingsAC(false))
    }

    const prevStartValueCallBack = (value: number) => {
        dispatch(setPrevStartValueAC(value))
    }

    const prevMaxValueCallBack = (value: number) => {
        dispatch(setPrevMaxValueAC(value))
    }

    return (
        <div className={s.settings}>
            <div className={s.inputs}>
                <Input
                    text="max value: "
                    value={prevMaxValue}
                    setValue={prevMaxValueCallBack}
                    error={errorBothValues}
                />
                <Input
                    text="start value: "
                    value={prevStartValue}
                    setValue={prevStartValueCallBack}
                    error={errorBothValues || errorStartValue}
                />
            </div>
            <Button title="set" callback={setCallBack} dis={dis}/>
        </div>
    )
}