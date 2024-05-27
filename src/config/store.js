import { configureStore } from "@reduxjs/toolkit";
import DoctorSlice from "../reducers/Doctors.slice";



export const store = configureStore({
    reducer: {
        doctors: DoctorSlice,

    }
})