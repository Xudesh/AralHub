import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    doctors: [],
    doctor_detail: []
}


const DoctorSlice = createSlice({
    name: 'doctor',
    initialState,
    reducers: {
        Fetching(state){
            state.isLoading  = true
        },

        Fetched(state, action){
            state.isLoading = false,
            state.doctors = action.payload
        },

        FetchError(state){
            state.isLoading = false
        },

        Selecting: (state, action) => {
            state.doctor_detail = action.payload;
          },
    }
})


export const {Fetching, Fetched, FetchError, Selecting} = DoctorSlice.actions
export default DoctorSlice.reducer