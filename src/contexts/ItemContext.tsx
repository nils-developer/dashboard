import React, {useState, useContext} from "react";

type Item = {
    transactionId: number,
    transactionType: string,
    amount: number,
    date: string,
    userId: number
}

type StateItem = {
    items: Item[],
    setItems: React.Dispatch<React.SetStateAction<Item[]>>
}

const ItemContext = React.createContext<StateItem>({
        items: [], setItems: () => {}
    })

export const useItems = () => {
    return useContext<StateItem>(ItemContext)
}

const ItemProvider = ({children}: {children: React.ReactNode}) => {
    const [items, setItems] = useState<Item[]>([])

    return (
        <ItemContext.Provider value={{items, setItems}}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemProvider