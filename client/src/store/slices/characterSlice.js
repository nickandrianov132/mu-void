import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
    name: 'character',
    initialState: [],
    reducers: {
        addCharacters(state, action) {
            return state = action.payload
        }
    }
})

export const { addCharacters } = characterSlice.actions
export default characterSlice.reducer