export type CounterStateType = {
    startValue: number
    maxValue: number
    currentValue: number
}

type IncValueAT = {
    type: 'INC-VALUE'
}

type ResValueAT = {
    type: 'RES-VALUE'
}

type SetStartAndMaxValueAT = {
    type: 'SET-START-AND-MAX-VALUE'
    start: number
    max: number

}

export type CounterActionType = IncValueAT | ResValueAT | SetStartAndMaxValueAT

const initialValue: CounterStateType = {
    startValue: 0,
    maxValue: 10,
    currentValue: 0,
}

export const counterReducer = (state: CounterStateType = initialValue, action: CounterActionType): CounterStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {
                ...state,
                currentValue: state.currentValue + 1
            }
        case 'RES-VALUE':
            return {
                ...state,
                currentValue: state.startValue
            }
        case 'SET-START-AND-MAX-VALUE':
            return {
                ...state,
                startValue: action.start,
                maxValue: action.max,
                currentValue: action.start
            }
        default:
            return state
    }
}

export const incValueAC = (): IncValueAT => ({type: 'INC-VALUE'})

export const resValueAC = (): ResValueAT => ({type: 'RES-VALUE'})

export const setStartAndMaxValueAC = (start: number, max: number): SetStartAndMaxValueAT => ({
    type: 'SET-START-AND-MAX-VALUE',
    start,
    max
})
