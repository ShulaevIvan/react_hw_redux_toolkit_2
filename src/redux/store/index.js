import {configureStore} from '@reduxjs/toolkit';
import loadImageReducer from '../slices/loadImageSlice';

export const store = configureStore({
    reducer: {
        images: loadImageReducer,
    },
    middleware: (getDefaultMiddleware)  => getDefaultMiddleware(),
})