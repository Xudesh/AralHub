import axios from "axios";
import { Fetching, Fetched, FetchError } from "../reducers/Doctors.slice";
import { useState } from "react";


export async function GetDoctor(url, dispatch){
    dispatch(Fetching())
    
    await axios.get(url)

    .then(
        res => {
            console.log(res),
            dispatch(Fetched(res.data))
        }
    )

    .catch(
        err => {
            console.log(err),
            dispatch(FetchError())
        }
    )
}