import React, {FormEventHandler, useRef} from "react";
import {Header} from "../../components/Header";
import {Button} from "../../components/Button";
import axios from "axios";


export const Stock = () => {
    const refStockName = useRef<HTMLInputElement>(null)
    const refStockPrice = useRef<HTMLInputElement>(null)

    const addStock: FormEventHandler<HTMLFormElement> = (e: React.SyntheticEvent) => {
        e.preventDefault()

        const currentDate = new Date().toISOString().slice(0, 19)

        const stockItem = {
            stockName: refStockName.current?.value,
            stockPrice: refStockPrice.current?.value,
            stockDate: currentDate
        }

        console.log(stockItem)

        axios.post(
            "http://localhost:8080/stock/create",
            stockItem
        ).catch(
            error => console.error(error)
        )

        refStockName.current != null ? refStockName.current.value = "" : console.log(refStockName.current)
        refStockPrice.current != null ? refStockPrice.current.value = "" : console.log(refStockPrice.current)
    }

    return (
        <div>
            <Header title="Add Money"/>
            <form method="post" onSubmit={addStock}>
                <div className="flex flex-col gap-3 w-2/6">
                    <h2 className="text-xl">New Stock</h2>
                    <label className="font-medium">Name:</label>
                    <input ref={refStockName} className="border border-emerald-600 rounded-md" type="text"/>
                    <label className="font-medium">Price:</label>
                    <input ref={refStockPrice} className="border border-emerald-600 rounded-md" type="text"/>
                    <div className="text-white">
                        <Button type="submit" text="Submit"/>
                    </div>
                </div>
            </form>
        </div>
    )
}