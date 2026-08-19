import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isVault: false,
    isWebstore: false,
    isSelected: false,
    itemSlot: null,
    itemSerial: null,
    width: null,
    height: null
}

const itemSelectedSlice = createSlice({
    name: 'itemSelected',
    initialState,
    reducers: {
        updateItem(state, action) {
            return state = action.payload
        }
    }

})

export const { updateItem } = itemSelectedSlice.actions
export default itemSelectedSlice.reducer