import {SetStateAction} from "react";
import axios, {AxiosResponse} from "axios";

export const fetchInvestmentAmountFromUser = async (setStateAction: (value: SetStateAction<number>) => void) => {
    let response: AxiosResponse<number> | void = await axios.get<number>("http://localhost:8080/transaction/fetchInvest")
        .catch(
            error => console.error(error)
        )

    setStateAction(
        Number(response?.data).toFixed(2) as unknown as SetStateAction<number>
    )
}