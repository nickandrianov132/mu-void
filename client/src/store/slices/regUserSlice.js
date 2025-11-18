import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    login:'',
    password: '',
    email:'',
    name: '',
    regQuestion: '',
    regAnswer: '',
    regRules: false,
    date:null,
    ip: null
}

const regUserSlice = createSlice({
    name: 'regUserData',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.login =  action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        setRegQuestion: (state, action) => {
            state.regQuestion = action.payload
        },
        setRegAnswer: (state, action) => {
            state.regAnswer = action.payload
        },
        setDate: (state, action) => {
            state.date = action.payload
        },
        setIp: (state, action) => {
            state.date = action.payload
        }
    }
})

export const {setLogin, setPassword, setEmail, setName, setRegQuestion, setRegAnswer, setDate, setIp} = regUserSlice.actions
export default regUserSlice.reducer