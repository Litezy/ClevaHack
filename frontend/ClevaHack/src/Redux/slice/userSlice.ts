import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "Guest", // Default username
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
    },
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;
