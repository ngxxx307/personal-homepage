import { createSlice } from "@reduxjs/toolkit";

import { refresh, logout } from "../../Requests/AuthRequests";

const initialState = {...JSON.parse(localStorage.getItem("authState"))|| null};

const authSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {
        setAuth(state, action) {
            const newState = action.payload
            console.log(newState)
            localStorage.setItem("authState", JSON.stringify(newState));
            return newState
        },
        deleteAuth(state, action){
            localStorage.removeItem("authState");
            logout()
            return null
        },
        refreshToken(state, action){
            refresh()
            return state
        }
    }
})

export const authAction = authSlice.actions;

export default authSlice;