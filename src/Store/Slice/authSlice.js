import { createSlice } from "@reduxjs/toolkit";

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
            return null
        },
        refreshToken(state, action){

        }
    }
})

export const authAction = authSlice.actions;

export default authSlice;