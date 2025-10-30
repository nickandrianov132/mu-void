import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    inputLogin: false,
    inputPassword: false,
    inputEmail: false,
    inputName: false,
    inputRegQuestion: false,
    inputRegAnswer: false,
}

const regUserInputSlice = createSlice({
    name: 'regUserInput',
    initialState,
    reducers: {
        setInputLogin: (state, action) => {
            state.inputLogin = action.payload
        },
        setInputPassword: (state, action) => {
            state.inputPassword = action.payload
        },
        setInputEmail: (state, action) => {
            state.inputEmail = action.payload
        },
        setInputName: (state, action) => {
            state.inputName = action.payload
        },
        setInputRegQuestion: (state, action) => {
            state.inputRegQuestion = action.payload
        },
        setInputRegAnwer: (state, action) => {
            state.inputRegAnswer = action.payload
        },
    }
})

export const { setInputLogin, setInputPassword, setInputEmail, setInputName, setInputRegQuestion, setInputRegAnwer} = regUserInputSlice.actions
export default regUserInputSlice.reducer