import { createSlice } from "@reduxjs/toolkit";

const personaldetailsSlice = createSlice({
    name: "Personal Details",
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

export const {update} = personaldetailsSlice.actions;
export default personaldetailsSlice;


