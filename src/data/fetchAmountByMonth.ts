import {Dispatch, SetStateAction} from "react";
import {MonthlyAmount} from "../helper/types";
import axios, {AxiosResponse} from "axios/index";

export const fetchAmountByMonth = async (
    setStateAction: Dispatch<SetStateAction<MonthlyAmount[]>>
) => {
   try {
       const response: AxiosResponse<MonthlyAmount[]> = await axios.get(
            "http://localhost:8080/transaction/fetchAmountByMonth"
       )

       setStateAction(response.data)
    } catch (error) {
        console.error(error)
    }
}