import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from './Components/Scoreboard';
import {Buttons} from './Components/Buttons';
import {SetStartEndValue} from './Components/SetStartEndValue';

function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [endValue, setEndValue] = useState<number>(10)

    const [value, setValue] = useState<number>(startValue)


    const incValue = () => {
        setValue(value + 1)
    }

    const resValue = () => {
        setValue(startValue)
    }

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
                setScoreValue={setValue}
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
