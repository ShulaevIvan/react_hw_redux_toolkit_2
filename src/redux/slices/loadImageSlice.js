import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lastLoadedImage: undefined,
    images: [],
};

export const loadImageSlice = createSlice({
    name: 'loadImage',
    initialState,
    reducers: {
        loadImage(state, action) {
            state.lastLoadedImage = action.payload;
            state.images = [...state.images, action.payload];
        },
    },
});

export const {loadImage} = loadImageSlice.actions; 
export default loadImageSlice.reducer;