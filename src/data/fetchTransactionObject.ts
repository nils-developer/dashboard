import axios, {AxiosResponse} from "axios";
import {Item} from "../helper/types";
import {Dispatch, SetStateAction} from "react";

export const fetchAllDataFromTransactions = async (
    setStateAction: Dispatch<SetStateAction<Item[]>>
) => {
    try {
        const response: AxiosResponse<Item[]> = await axios.get(
            "http://localhost:8080/transaction/fetchAll"
        )
        const reversedData: Item[] = response.data.reverse()

        setStateAction(reversedData)
    } catch (error) {
        console.error(error)
    }
}