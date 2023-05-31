import s from './Counter.module.css'

export type ScoreboardPropsType = {
    value: number
    onSettings: boolean
    errorBothValues: boolean
    errorStartValue: boolean
    warningMax: boolean
}

export const Scoreboard: React.FC<ScoreboardPropsType> = ({value, onSettings, errorBothValues, errorStartValue, warningMax}) => {

    let text = <div className={s.text}>enter values and press "set"</div>
    if (errorBothValues) text = <div className={`${s.text} ${s.red}`}>incorrect values</div>
    if (errorStartValue) text = <div className={`${s.text} ${s.red}`}>incorrect start value</div>

    const content = onSettings? text: value

    const classes = warningMax? `${s.scoreboard} ${s.red}`: s.scoreboard

    return (
        <div className={classes}>
            {content}
        </div>
    )
}