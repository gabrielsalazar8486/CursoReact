import {createContext, useContext } from "react";

type contexto = {
    name: string;
    lastName: string;
}

export const MyContext = createContext<contexto>({
    name: 'Gabriel',
    lastName: 'Salazar'
})

export const useMyContext = () => useContext(MyContext)