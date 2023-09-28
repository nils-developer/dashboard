import React, {DetailedHTMLProps, HTMLAttributes, useEffect} from "react";
import {useItems} from "../../contexts/ItemContext";
import {fetchAllDataFromTransactions} from "../../data/fetchTransactionObject";
import axios from "axios";
import {Item} from "../../helper/types";
import {formatDate} from "../../helper/functions";

type Props = {
    isButtonSet?: boolean
}

const tdStyle: string = "flex justify-center align-middle border-t border-emerald-600 w-full py-4";
const buttonStyle: string = "rounded-md my-2 px-3 py-2 bg-emerald-400 text-white text-sm hover:bg-emerald-200 hover:font-medium";
const hideButton: string = "hidden";
const reduceGrid: string = "grid grid-cols-4 font-medium";


export const Transactions = ({isButtonSet = true}: Props) => {
    const {items, setItems} = useItems()

    const removeItem = async(
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault()

        const deleteButton = event.target as HTMLButtonElement
        const parentDiv = deleteButton.parentElement?.parentElement
        const transactionId = parseInt(parentDiv?.firstElementChild?.textContent || "0", 10)
        const deleteItem = items.find(item => item.transactionId === transactionId)

        await axios.delete(
            `http://localhost:8080/transaction/delete/${deleteItem?.transactionId}`
        ).catch(
            error => console.error(error)
        )

        await axios.patch(
            `http://localhost:8080/balance/decrease/${deleteItem?.userId}`,
            deleteItem
        ).catch(
            error => console.error(error)
        )
    }

    useEffect(() => {
        fetchAllDataFromTransactions(setItems)
    })

    let id: number = items?.length
    
    return (
        <div className={
            isButtonSet ? "bg-gray-100 rounded-md overflow-hidden" : "bg-gray-100 rounded-md overflow-hidden"
        }>
            <div className={isButtonSet ? "grid grid-cols-5 font-medium py-5 mt-5" : reduceGrid + " py-5"}>
                <h3 className="flex justify-center border-r border-emerald-600">Id</h3>
                <h3 className="flex justify-center border-x border-emerald-600">Value</h3>
                <h3 className="flex justify-center border-x border-emerald-600">Created</h3>
                <h3 className="flex justify-center border-l border-emerald-600">Type</h3>
            </div>
            {
                items?.map((item: Item) => (
                <div
                    key={item.transactionId}
                    className={isButtonSet ? "grid grid-cols-5" : reduceGrid}
                >
                    <p className={tdStyle}>{id--}</p>
                    <p className={tdStyle}>{Number(item.amount).toFixed(2)} €</p>
                    <p className={tdStyle}>{formatDate(item.date)}</p>
                    <p className={tdStyle}>{item.transactionType}</p>
                    <div className={isButtonSet ? "flex justify-center border-t border-emerald-600" : hideButton}>
                        <form onSubmit={removeItem}>
                            <button
                                type="submit"
                                className={buttonStyle}
                            >
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            ))}
        </div>
    )
}