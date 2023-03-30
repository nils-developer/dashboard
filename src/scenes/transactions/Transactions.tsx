import {useEffect} from "react";
import {useItems} from "../../contexts/ItemContext";
import {fetchAllDataFromTransactions} from "./fetchData";

type Props = {
    isButtonSet?: boolean
}

type Items = {
    transactionId: number,
    transactionType: string,
    amount: number,
    date: string,
    userId: number
}

const tdStyle: string = "flex justify-center align-middle border-t border-emerald-600 w-full py-4";
const buttonStyle: string = "rounded-md my-2 px-3 py-2 bg-emerald-400 text-white text-sm hover:bg-emerald-200 hover:font-medium";
const hideButton: string = "hidden";
const reduceGrid: string = "grid grid-cols-4 font-medium";

export const Transactions = ({isButtonSet = true}: Props) => {
    const {items, setItems} = useItems()


    const formatDate = (date: string): string => {
        return new Date(date).toISOString().slice(0, 10)
    }

    useEffect(() => {
        fetchAllDataFromTransactions(setItems)
        // fetchTodos()
    })

    return (
        <div className="bg-gray-100 rounded-md">
            <div className={isButtonSet ? "grid grid-cols-5 font-medium py-5 mt-5" : reduceGrid + " py-5"}>
                <h3 className="flex justify-center border-r border-emerald-600">Id</h3>
                <h3 className="flex justify-center border-x border-emerald-600">Value</h3>
                <h3 className="flex justify-center border-x border-emerald-600">Created</h3>
                <h3 className="flex justify-center border-l border-emerald-600">Type</h3>
            </div>
            {
                items.map((item: Items) => (
                <div
                    key={item.transactionId}
                    className={isButtonSet ? "grid grid-cols-5" : reduceGrid}
                >
                    <p className={tdStyle}>{item.transactionId}</p>
                    <p className={tdStyle}>{Number(item.amount).toFixed(2)} €</p>
                    <p className={tdStyle}>{formatDate(item.date)}</p>
                    <p className={tdStyle}>{item.transactionType}</p>
                    <div className={isButtonSet ? "flex justify-center border-t border-emerald-600" : hideButton}>
                        <button
                            type="submit"
                            className={buttonStyle}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}