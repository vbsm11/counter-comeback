export type SettingsStateType = {
    prevStartValue: number
    prevMaxValue: number
    onSettings: boolean
}


type SetPrevStartValueAT = {
    type: 'SET-PREV-START-VALUE'
    value: number
}

type SetPrevMaxValueAT = {
    type: 'SET-PREV-MAX-VALUE'
    value: number
}

type SetOnSettingsAT = {
    type: 'SET-ON-SETTINGS'
    newOnSet: boolean
}

export type SettingsActionType = SetPrevStartValueAT | SetPrevMaxValueAT | SetOnSettingsAT

const initialValue: SettingsStateType = {
    prevStartValue: 0,
    prevMaxValue: 10,
    onSettings: false
}

export const settingsReducer = (state: SettingsStateType = initialValue, action: SettingsActionType): SettingsStateType => {
    switch (action.type) {
        case 'SET-PREV-START-VALUE':
            return {
                ...state,
                prevStartValue: action.value
            }
        case 'SET-PREV-MAX-VALUE':
            return {
                ...state,
                prevMaxValue: action.value
            }
        case 'SET-ON-SETTINGS':
            return {
                ...state,
                onSettings: action.newOnSet
            }
        default:
            return state
    }
}

export const setPrevStartValueAC = (value: number): SetPrevStartValueAT => ({
    type: 'SET-PREV-START-VALUE',
    value
})

export const setPrevMaxValueAC = (value: number): SetPrevMaxValueAT => ({
    type: 'SET-PREV-MAX-VALUE',
    value
})

export const setOnSettingsAC = (newOnSet: boolean): SetOnSettingsAT => ({
    type: 'SET-ON-SETTINGS',
    newOnSet
})