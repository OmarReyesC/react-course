import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = ({children}) => {
    const [count, setCount] = useState(0);
    console.log('Count:', count);
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}