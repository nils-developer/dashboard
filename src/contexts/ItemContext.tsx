import React, {useState, useContext, Provider, ContextType} from "react";
import * as string_decoder from "string_decoder";

type Props = {
    children: React.ReactNode
}

interface ItemsState {
        id: string,
        value: string,
        date: string
}

const ItemContext = React.createContext([])

export const useItems = () => {
    return useContext(ItemContext)
}

const ItemProvider = ({children}: Props) => {
    const [items, setItems] = useState<ItemsState[]>([])

    return (
        <ItemContext.Provider value={{items, setItems}}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemProvider