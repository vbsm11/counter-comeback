import s from './Counter.module.css'

export type ScoreboardPropsType = {
    value: number
    warningMax: boolean
}

export const Scoreboard: React.FC<ScoreboardPropsType> = ({value, warningMax}) => {

    const classes = warningMax? `${s.scoreboard} ${s.red}`: s.scoreboard

    return (
        <div className={classes}>
            {value}
        </div>
    )
}