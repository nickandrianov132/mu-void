import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: '',
    email: '',
    question: '',
    answer: '',
    password: ''
}

const regainPasswordSlice = createSlice({
    name: 'reaginPassword',
    initialState,
    reducers: {
        setRegainLogin: (state, action) => {
            state.login = action.payload
        },
        setRegainEmail: (state, action) => {
            state.email = action.payload
        },
        setRegainQuestion: (state, action) => {
            state.question = action.payload
        },
        setRegainAnswer: (state, action) => {
            state.answer = action.payload
        },
        setRegainPassword: (state, action) => {
            state.password = action.payload
        },
    }
})

export const {setRegainEmail, setRegainLogin, setRegainQuestion, setRegainAnswer, setRegainPassword} = regainPasswordSlice.actions
export default regainPasswordSlice.reducer