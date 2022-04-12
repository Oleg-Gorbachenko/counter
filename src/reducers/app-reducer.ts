export type initialStateType = {
    value: number
    startValue: number
    maxValue: number
    error: boolean
    disabledInc: boolean
    disabledReset: boolean
    disabledSet: boolean
    inputText: boolean
}

const initialState: initialStateType = {
    value: 0,
    startValue: 0,
    maxValue: 0,
    error: false,
    disabledInc: false,
    disabledReset: false,
    disabledSet: true,
    inputText: false,
}

export const appReducer = (state = initialState, action: appReducersType): initialStateType => {
    switch (action.type) {
        case 'VALUE-IS-NOT-PERMISSIBLE' : {
            return {...state, error: true, disabledInc: true, disabledSet: true}
        }
        case 'MAX-VALUE-IS-PERMISSIBLE' : {
            return {...state, error: false, inputText: true, disabledSet: false}
        }
        case 'SET-START-VALUE' : {
            return {...state, startValue: action.eventValue}
        }
        case 'SET-MAX-VALUE' : {
            return {...state, maxValue: action.eventValue}
        }
        case 'SET-VALUES-IN-COUNTER' : {
            return {
                ...state,
                startValue: action.startValue,
                maxValue: action.maxValue,
                value: action.startValue,
                disabledSet: true,
                disabledInc: false,
                inputText: false
            }
        }
        case 'COUNTER-PLUS-ONE' : {
            return {...state, value: action.value + 1}
        }
        case 'RESET-COUNTER' : {
            return {...state, value: action.startValue}
        }
        case 'SET-DISABLED-INC' : {
            return {...state, disabledInc: action.set}
        }
        case 'SET-DISABLED-RESET' : {
            return {...state, disabledReset: action.set}
        }
        default:
            return state
    }
}
type appReducersType =
    valueIsNotPermissibleACType
    | maxValueIsPermissibleACType
    | setStartValueACType
    | setValuesInCounterACType
    | setMaxValueACType
    | counterPlusOneACType
    | resetCounterACType
    | setDisabledIncACType
    | setDisabledResetACType

type valueIsNotPermissibleACType = ReturnType<typeof valueIsNotPermissibleAC>
export const valueIsNotPermissibleAC = () => {
    return {
        type: 'VALUE-IS-NOT-PERMISSIBLE'
    } as const
}

type maxValueIsPermissibleACType = ReturnType<typeof valueIsPermissibleAC>
export const valueIsPermissibleAC = () => {
    return {
        type: 'MAX-VALUE-IS-PERMISSIBLE'
    } as const
}

type setStartValueACType = ReturnType<typeof setStartValueAC>
export const setStartValueAC = (eventValue: number) => {
    return {
        type: 'SET-START-VALUE',
        eventValue,
    } as const
}

type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (eventValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        eventValue,
    } as const
}

type setValuesInCounterACType = ReturnType<typeof setValuesInCounterAC>
export const setValuesInCounterAC = (startValue: number, maxValue: number) => {
    return {
        type: 'SET-VALUES-IN-COUNTER',
        startValue,
        maxValue,
    } as const
}
type counterPlusOneACType = ReturnType<typeof counterPlusOneAC>
export const counterPlusOneAC = (value: number) => {
    return {
        type: 'COUNTER-PLUS-ONE',
        value,
    } as const
}

type resetCounterACType = ReturnType<typeof resetCounterAC>
export const resetCounterAC = (startValue: number) => {
    return {
        type: 'RESET-COUNTER',
        startValue,
    } as const
}
type setDisabledIncACType = ReturnType<typeof setDisabledIncAC>
export const setDisabledIncAC = (set: boolean) => {
    return {
        type: 'SET-DISABLED-INC',
        set,
    } as const
}

type setDisabledResetACType = ReturnType<typeof setDisabledResetAC>
export const setDisabledResetAC = (set: boolean) => {
    return {
        type: 'SET-DISABLED-RESET',
        set,
    } as const
}
