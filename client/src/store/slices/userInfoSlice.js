import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    accName: null,
    wCoins: null, 
    gPoints: null,
    zen: null,
    vipType: null,
    vipStart: null,
    vipDays: null
}

const userInfoSlice = createSlice({
    name: 'userCurrencyInfo',
    initialState,
    reducers: {
        updateUserInfo(state, action) {
            return state = action.payload
        }
    }

})

export const { updateUserInfo } = userInfoSlice.actions
export default userInfoSlice.reducer