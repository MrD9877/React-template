import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slices/reduxSlice.js"
import userReducer from './slices/userSlice.js';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    }

})

export default store;