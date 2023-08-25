import {SetStateAction} from "react";
import axios, {AxiosResponse} from "axios";

export const fetchInvestmentAmountFromUser = async (
    setStateAction: (value: SetStateAction<number>) => void
) => {
    try {
        const response: AxiosResponse<number> = await axios.get(
            "http://localhost:8080/transaction/fetchInvest"
        )

        setStateAction(
            Number(response?.data)
        )
    } catch (error) {
        console.error(error)
    }
}