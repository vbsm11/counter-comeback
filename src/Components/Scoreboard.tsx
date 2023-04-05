export type ScoreboardPropsType = {
  value: number
}

export const Scoreboard = (props: ScoreboardPropsType) => {
  return (
      <div className='scoreboard'>
        {props.value}
      </div>
  )
}