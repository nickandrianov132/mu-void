import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: localStorage.getItem('token'), 
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            localStorage.setItem('token', action.payload)
            state.accessToken = action.payload
        },

        logout: (state, action) => {
            localStorage.removeItem('token')
            state.accessToken = null;
        }
    }
})

export const { setToken, logout } = authSlice.actions
// export const selectCurrentToken = (state) => state.auth.accessToken;
// export const selectIsAuth = (state) => state.auth.isAuth;
export default authSlice.reducer