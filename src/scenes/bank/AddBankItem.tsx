import React, {FormEventHandler, useRef} from "react";
import {Header} from "../../components/Header";
import {Button} from "../../components/Button";
import axios from "axios";

type Props = {
    itemType: "bank" | "investment" | "stock"
}

export const AddBankItem = ({itemType}: Props) => {
    const refBankValue = useRef<HTMLInputElement>(null)

    const addBankItem: FormEventHandler<HTMLFormElement> = (e: React.SyntheticEvent) => {
        e.preventDefault()

        const currentDate = new Date().toISOString().slice(0, 10)

        const bankItem = {
            date: currentDate,
            value: Number(refBankValue.current?.value).toFixed(2)
        }

        console.log(bankItem.date)
        console.log(bankItem.value)

        axios.post(
            "http://localhost:8080/bank/create",
            bankItem
        ).catch(
            error => console.error(error)
        )

        refBankValue.current != null ? refBankValue.current.value = "" : console.log(refBankValue.current)
    }

    return (
        <div>
            <Header title="Add Bank Item"/>
            <form method="post" onSubmit={addBankItem}>
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