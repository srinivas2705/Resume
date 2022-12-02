import { configureStore } from "@reduxjs/toolkit";
import personaldetailsSlice from "./slice/personaldetailsSlice";


const store= configureStore({
    reducer: {
        personaldetails: personaldetailsSlice.reducer
    }
})

export default store;