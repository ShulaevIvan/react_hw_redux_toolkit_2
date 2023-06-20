import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    lastLoadedImage: 3,
    images: [],
}

export const loadImageSlice = createSlice({
    name: 'loadImage',
    initialState,
    reducers: {
        loadImage(state, action) {
            state.lastLoadedImage = action.payload;
        }
    },
});

export const {loadImage} = loadImageSlice.actions; 
export default loadImageSlice.reducer;