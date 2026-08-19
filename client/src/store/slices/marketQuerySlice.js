import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    page: 1,
    catId: null
}

const marketQuerySlice = createSlice({
    name: 'marketQuery',
    initialState,
    reducers: {
        updateMarketQuery(state, action) {
            return state = {...state, ...action.payload}
        }
    }
})

export const {updateMarketQuery} = marketQuerySlice.actions
export default marketQuerySlice.reducer
