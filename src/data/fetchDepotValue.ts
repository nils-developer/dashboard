import axios, {AxiosResponse} from "axios";
import {SetStateAction} from "react";

export const fetchDepotValue = async (
    setStateAction: (value: SetStateAction<number>) => void
) => {
    try {
        const response: AxiosResponse<number> = await axios.get(
            "http://localhost:8080/transactions/fetch"
        )

        setStateAction(
            Number(response?.data)
        )
    } catch (error) {
        console.error(error)
    }
}