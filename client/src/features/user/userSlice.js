import { createSlice } from "@reduxjs/toolkit";

let initialState;
if (localStorage.getItem("token")) {
    initialState = {
        loggedIn: true,
        token: localStorage.getItem("token"),
        user: null,
    };
} else {
    initialState = {
        loggedIn: false,
        token: null,
        user: null,
    };
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        login: (state) => {
            state.loggedIn = true;
            state.token = localStorage.getItem("token");
            state.user = null;
        },
        logout: (state) => {
            state.loggedIn = false;
            state.token = null;
            state.user = null;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { login, logout, setUser } = userSlice.actions;
export default userSlice.reducer;
