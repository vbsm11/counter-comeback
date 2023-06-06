import React from 'react';
import './App.css';
import {Settings} from './Components/Settings/Settings';
import {Counter} from './Components/Counter/Counter';
import {useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';


function AppWithRedux() {

    const onSettings = useSelector<AppRootStateType, boolean>(state => state.settingsState.onSettings)

    return (
        <div className="App">
            {onSettings? <Settings/>: <Counter/>}
        </div>
    );
}

export default AppWithRedux;
