import s from './Counter.module.css'

export type ScoreboardPropsType = {
    value: number
    onSettings: boolean
    errorBothValues: boolean
    errorStartValue: boolean
}

export const Scoreboard: React.FC<ScoreboardPropsType> = ({value, onSettings, errorBothValues, errorStartValue}) => {

    let text = 'enter values and pres "set"'
    if (errorBothValues) text = 'incorrect values'
    if (errorStartValue) text = 'incorrect start value'

    const content = onSettings? text: value

    return (
        <div className={s.scoreboard}>
            {content}
        </div>
    )
}