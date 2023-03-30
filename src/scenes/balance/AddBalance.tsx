import React, {FormEventHandler, useRef} from "react";
import {Header} from "../../components/Header";
import {Button} from "../../components/Button";
import axios from "axios";

type Props = {
    itemType: "balance" | "investment" | "stock"
}

export const AddBalance = ({itemType}: Props) => {
    const refBankValue = useRef<HTMLInputElement>(null)

    const increaseBalance: FormEventHandler<HTMLFormElement> = (e: React.SyntheticEvent) => {
        e.preventDefault()

        const currentDate = new Date().toISOString().slice(0, 19)

        const balanceItem = {
            balance: Number(refBankValue.current?.value).toFixed(2),
            date: currentDate
        }

        console.log(balanceItem.balance)
        console.log(balanceItem.date)

        axios.patch(
            "http://localhost:8080/balance/increase/1",
            balanceItem
        ).catch(
            error => console.error(error)
        )

        const transactionItem = {
            transactionId: 0,
            amount: Number(refBankValue.current?.value).toFixed(2),
            date: currentDate,
            transactionType: "B",
            user: {
                userId: 1,
                username: "admin"
            }
        }

        axios.post(
            "http://localhost:8080/transaction/create",
            transactionItem
        ).catch(
            error => console.error(error)
        )

        refBankValue.current != null ? refBankValue.current.value = "" : console.log(refBankValue.current)
    }

    return (
        <div>
            <Header title="Add Money"/>
            <form method="post" onSubmit={increaseBalance}>
                <div className="flex flex-col gap-3 w-2/6">
                    <label className="font-medium">New Income</label>
                    <input ref={refBankValue} className="border border-emerald-600 rounded-md" type="text"/>
                    <div className="text-white">
                        <Button type="submit" text="Submit"/>
                    </div>
                </div>
            </form>
        </div>
    )
}