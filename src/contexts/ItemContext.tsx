import React, {useState, useContext, Provider, ContextType} from "react";

const ItemContext = React.createContext([])

export const useItems = () => {
    return useContext(ItemContext)
}

type Props = {
    children: React.ReactNode
}

const ItemProvider = ({children}: Props) => {
    const [items, setItems] = useState<string[]>([] as string[])

    return (
        <ItemContext.Provider} value={items}>
            {children}
        </ItemContext.Provider>
    )
}

export default ItemProvider