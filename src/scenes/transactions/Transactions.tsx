import axios from "axios";
import {useEffect} from "react";
import {useItems} from "../../contexts/ItemContext";

type Props = {
    isButtonSet?: boolean
}

const tdStyle: string = "flex justify-center align-middle border-t border-emerald-600 w-full py-4"
const buttonStyle: string = "rounded-md my-2 px-3 py-2 bg-emerald-400 text-white text-sm hover:bg-emerald-200 hover:font-medium"
const hideButton: string = "hidden";
const reduceGrid: string = "grid grid-cols-4 font-medium";


export const Transactions = ({isButtonSet = true}: Props) => {
    const [items, setItems] = useItems()

    const fetchTodos = async () => {
        let response = await axios.get("http://localhost:8080/bank/fetchAll")
            .catch(
                error => console.log(error)
            )

        setItems(
            response.data
        )
    }

    // const transactions = [
    //     {id: 1, value: 230.00, created: "22-22-22", type: "D"},
    //     {id: 2, value: 330.00, created: "24-22-22", type: "Z"},
    //     {id: 3, value: 430.00, created: "25-22-22", type: "B"}
    // ]

    useEffect(() => {
        fetchTodos()
    })

    return (
        <div className="bg-gray-100 rounded-md">
            <div className={isButtonSet ? "grid grid-cols-5 font-medium py-5 mt-5" : reduceGrid + " py-5"}>
                <h3 className="flex justify-center border-r border-emerald-600">Id</h3>
                <h3 className="flex justify-center border-x border-emerald-600">Value</h3>
                <h3 className="flex justify-center border-x border-emerald-600">Created</h3>
                <h3 className="flex justify-center border-l border-emerald-600">Type</h3>
            </div>
            {items.map(({id, value, created, type = "B" }) => (
                <div
                    key={id}
                    className={isButtonSet ? "grid grid-cols-5" : reduceGrid}
                >
                    <p className={tdStyle}>{id}</p>
                    <p className={tdStyle}>{Number(value).toFixed(2)} €</p>
                    <p className={tdStyle}>{created}</p>
                    <p className={tdStyle}>{type}</p>
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