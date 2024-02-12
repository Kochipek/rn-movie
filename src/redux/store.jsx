import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../redux/reducers/movieReducer';
import userReducer from "./userSlice";
export const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer
    }
})