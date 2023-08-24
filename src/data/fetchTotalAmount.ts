import axios, {AxiosResponse} from "axios";
import {SetStateAction} from "react";

export const fetchTotalAmountFromUser = async (setStateAction: (value: SetStateAction<number>) => void) => {
    let response: AxiosResponse<number> | void = await axios.get<number>("http://localhost:8080/transaction/fetchTotal")
        .catch(
            error => console.error(error)
        )

    setStateAction(
        Number(response?.data).toFixed(2) as unknown as SetStateAction<number>
    )
}