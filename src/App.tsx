import React, {useReducer, useState} from 'react';
import './App.css';
import {Scoreboard} from './Components/Scoreboard';
import {Buttons} from './Components/Buttons';
import {SetStartEndValue} from './Components/SetStartEndValue';

type IncAT = {
    type: 'INC'
}

type ResAT = {
    type: 'RES'
}

type SetStartEndValueAT = {
    type: 'SET-START-OR-END-VALUE'
    value: number
}

type ActionType = IncAT | ResAT | SetStartEndValueAT

const counterReducer = (state: number, action: ActionType): number => {
    switch (action.type) {
        case 'INC':
            return state + 1
        case 'RES':
            return 0
        case 'SET-START-OR-END-VALUE':
            return action.value
        default:
            return state
    }
}

function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [endValue, setEndValue] = useState<number>(10)

    const [value, dispatchValue] = useReducer(counterReducer, startValue)


    const incValue = () => {
        dispatchValue({type: 'INC'})
    }

    const resValue = () => {
        dispatchValue({type: 'RES'})
    }

    const setStartEndValue = (value: number) => dispatchValue({
        type: 'SET-START-OR-END-VALUE',
        value
    })

    return (
        <div className="App">
            <Scoreboard
                value={value}
            />

            <Buttons
                incValue={incValue}
                resValue={resValue}
                disInc={value === endValue || startValue + 1 >= endValue}
                disRes={startValue + 1 >= endValue}
            />

            <SetStartEndValue
                text={'set the start value'}
                value={startValue}
                setValue={setStartValue}
                setScoreValue={setStartEndValue}
            />

            <SetStartEndValue
                text={'set the end value'}
                value={endValue}
                setValue={setEndValue}
            />

            <div className={'error'}>
                {(startValue + 1 >= endValue) && 'the start value must be less than the end value'}
            </div>

        </div>
    );
}

export default App;
