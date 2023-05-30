import React, {useState} from 'react';
import './App.css';
import {Settings} from './Components/Settings/Settings';
import {Counter} from './Components/Counter/Counter';

type StateType = {
    startValue: number
    maxValue: number
    currentValue: number
}

function App() {

    const [state, setState] = useState<StateType>({
        startValue: 0,
        maxValue: 10,
        currentValue: 0
    })

    const [startValue, setStartValue] = useState<number>(state.startValue)
    const [maxValue, setMaxValue] = useState<number>(state.maxValue)

    const [onSettings, setOnSettings] = useState<boolean>(false)
    const errorBothValues: boolean = startValue >= maxValue
    const errorStartValue: boolean = startValue < 0

    const incValue = () => {
        setState({...state, currentValue: state.currentValue + 1})
    }

    const resValue = () => {
        setState({...state, currentValue: state.startValue})
    }

    const setStartAndMaxValue = (start: number, max: number) => {
       setState({startValue: start, maxValue: max, currentValue: start})
    }

    return (
        <div className="App">
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                setStartAndMaxValue={setStartAndMaxValue}
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
                onSettings={onSettings}
                setOnSettings={setOnSettings}
                errorBothValues={errorBothValues}
                errorStartValue={errorStartValue}
            />
            <Counter
                value={state.currentValue}
                onSettings={onSettings}
                errorBothValues={errorBothValues}
                errorStartValue={errorStartValue}
                maxValue={maxValue}
                incValue={incValue}
                resValue={resValue}
            />
        </div>
    );
}

export default App;
