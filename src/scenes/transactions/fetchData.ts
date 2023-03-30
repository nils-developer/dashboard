import axios, {AxiosResponse} from "axios";
import {SetStateAction} from "react";

type Item = {
    transactionId: number,
    transactionType: string,
    amount: number,
    date: string,
    userId: number
}

export const fetchAllDataFromTransactions = async (setStateAction: (value: (((prevState: Item[]) => Item[]) | Item[])) => void) => {
    let response: AxiosResponse<any> | void = await axios.get<any>("http://localhost:8080/transaction/fetch")
        .catch(
            error => console.error(error)
        )

    setStateAction(
        response?.data as unknown as SetStateAction<any>
    )
}