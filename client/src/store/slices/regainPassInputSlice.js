import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    regainInputLogin: false,
    regainInputEmail: false,
    regainInputAnswer: false,
}

const regainPasswordInputSlice = createSlice({
    name: 'regainPasswordInput',
    initialState,
    reducers: {
        setRegainInputLogin: (state, action) => {
            state.regainInputLogin = action.payload
        },
        setRegainInputEmail: (state, action) => {
            state.regainInputEmail = action.payload
        },
        setRegainInputAnswer: (state, action) => {
            state.regainInputAnswer = action.payload
        },
    }
})

export const { setRegainInputLogin, setRegainInputEmail, setRegainInputAnswer } = regainPasswordInputSlice.actions
export default regainPasswordInputSlice.reducer