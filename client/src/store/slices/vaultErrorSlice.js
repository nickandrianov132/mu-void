import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isError: false,
    message: ''
}

const vaultErrorSlice = createSlice({
    name: 'vaultError',
    initialState,
    reducers: {
        updateError(state, action) {
            return state = action.payload
        }
    }

})

export const { updateError } = vaultErrorSlice.actions
export default vaultErrorSlice.reducer