import axios, {AxiosResponse} from "axios";
import {SetStateAction} from "react";
import {Item} from "../helper/types";

export const fetchAllDataFromTransactions = async (setStateAction: (value: (((prevState: Item[]) => Item[]) | Item[])) => void) => {
    let response: AxiosResponse<any> | void = await axios.get<any>("http://localhost:8080/transaction/fetchAll")
        .catch(
            error => console.error(error)
        )

    setStateAction(
        response?.data.reverse() as unknown as SetStateAction<any>
    )
}