import { createContext } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = ({children}) => {
    return (
        <ShoppingCartContext.Provider>
            {children}
        </ShoppingCartContext.Provider>
    )
}