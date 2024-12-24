import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { useSearchParams } from "react-router-dom";

const userSlice = createSlice(
    {
        name : "user",
        initialState : null,
        reducers : {
            addUser: (state,action) =>{
                return action.payload;
            },
            removeUser: (state,action)=>{
                return null;
            }
        }
    }
);

export const {addUser, removeUser} =  userSlice.actions;
export default userSlice.reducer;