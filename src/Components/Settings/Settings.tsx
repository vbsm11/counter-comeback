import React from 'react';
import {Button} from '../Button';
import {Input} from './Input';
import s from './Settings.module.css'

export type SettingsPropsType = {
    startValue: number
    maxValue: number
    setStartAndMaxValue: (start: number, max: number) => void
    setStartValue: (v: number) => void
    setMaxValue: (v: number) => void
    onSettings: boolean
    setOnSettings: (onSettings: boolean) => void
    errorBothValues: boolean
    errorStartValue: boolean
}

export const Settings: React.FC<SettingsPropsType> = ({startValue, maxValue, setStartAndMaxValue, setStartValue, setMaxValue, onSettings, setOnSettings, errorBothValues, errorStartValue}) => {

    const callBack = () => {
      setStartAndMaxValue(startValue, maxValue)
      setOnSettings(false)
    }

    const dis = errorBothValues || errorStartValue || !onSettings

    return (
        <div className={s.settings}>
            <Input
                text='max value: '
                value={maxValue}
                setValue={setMaxValue}
                setOnSettings={setOnSettings}
                error={errorBothValues}
            />
            <Input
                text='start value: '
                value={startValue}
                setValue={setStartValue}
                setOnSettings={setOnSettings}
                error={errorBothValues || errorStartValue}
            />
            <Button title='set' callback={callBack} dis={dis}/>
        </div>
    )
}