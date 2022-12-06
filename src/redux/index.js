import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./slice/coursesSlice";
import educationSlice from "./slice/educationSlice";
import employmentSlice from "./slice/employmentSlice";
import extraCurricSlice from "./slice/extracurricSlice";
import internshipSlice from "./slice/internshipSlice";
import languageSlice from "./slice/languagesSlice";
import linksSlice from "./slice/linksSlice";
import referenceSlice from "./slice/referenceSlice";
import personaldetailsSlice from "./slice/personaldetailsSlice";


export default configureStore({
    reducer:{
        personaldetails: personaldetailsSlice.reducer,
        employment: employmentSlice.reducer,
        education: educationSlice.reducer,
        internship: internshipSlice.reducer,
        courses: coursesSlice.reducer,
        reference: referenceSlice.reducer,
        links: linksSlice.reducer,
        languages: languageSlice.reducer,
        extracurrics: extraCurricSlice.reducer
    }
})