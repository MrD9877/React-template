import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: null,
        password: null,
        id: 0
    },
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.username
            state.password = action.payload.password
            state.id++
        }
    }

})
export const { setUser } = userSlice.actions
export default userSlice.reducer