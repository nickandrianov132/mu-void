import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isSuccess: false,
    message: 'item was successfully sended to market!'
}

const vaultSuccessSlice = createSlice({
    name: 'vaultSuccess',
    initialState,
    reducers: {
        updateSuccess(state, action) {
            return state = action.payload
        }
    }

})

export const { updateSuccess } = vaultSuccessSlice.actions
export default vaultSuccessSlice.reducer