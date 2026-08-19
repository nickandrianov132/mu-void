import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isMenu: false,
}

const sellMenuStateSlice = createSlice({
    name: 'sellMenuState',
    initialState,
    reducers: {
        updateMenuState(state, action) {
            return state = action.payload
        }
    }

})

export const { updateMenuState } = sellMenuStateSlice.actions
export default sellMenuStateSlice.reducer