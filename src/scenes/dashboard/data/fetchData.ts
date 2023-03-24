import axios from "axios";
import {SetStateAction} from "react";

export const fetchTotalBankValue = async (setStateAction: (arg0: SetStateAction<number>) => void) => {
    let response: any = await axios.get<number>("http://localhost:8080/bank/fetchTotal")
        .catch(
            error => console.error(error)
        )

    setStateAction(
        Number(response.data).toFixed(2) as unknown as SetStateAction<number>
    )
}