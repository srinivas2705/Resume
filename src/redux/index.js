import { configureStore } from "@reduxjs/toolkit";
import personaldetailsSlice from "./slice/personaldetailsSlice";
import newtemplateSlice from "./slice/newetemplateSlice";


const store= configureStore({
    reducer: {
        personaldetails: personaldetailsSlice.reducer,
        newtemplate : newtemplateSlice.reducer,
    }
})

export default store;