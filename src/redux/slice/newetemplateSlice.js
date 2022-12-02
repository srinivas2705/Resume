import { createSlice } from "@reduxjs/toolkit";

const newtemplateSlice = createSlice({
    name: "Template",
    initialState:{
        value: {}
    },

    reducers: {
        update: (state, action) =>{
            const{key, value} = action.payload;
            state.value ={
                ...state.value, [key]: value
            }
        }
    }
   
}) ;

export const {update} = newtemplateSlice.actions;
export default newtemplateSlice;