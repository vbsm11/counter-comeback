export type ButtonPropsType = {
    title: string
    callback: () => void
    dis: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button
            className='button'
            disabled={props.dis}
            onClick={props.callback}
        >
            {props.title}
        </button>
    )
}