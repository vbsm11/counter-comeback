import {Button} from './Button';

export type ButtonsPropsType = {
    incValue: () => void
    resValue: () => void
    disInc: boolean
    disRes: boolean
}

export const Buttons = (props: ButtonsPropsType) => {
    return (
        <div className='buttons'>
            <Button title='inc' callback={props.incValue} dis={props.disInc}/>
            <Button title='res' callback={props.resValue} dis={props.disRes}/>
        </div>
    )
}