import {FC, useState, useEffect, createContext, ReactNode } from "react";
import {dataTypeAll } from "../utils/typeDefs";

interface ContextProps {
    data: dataTypeAll[];
    setData: (value: dataTypeAll[]) => void;
}

const Context = createContext<ContextProps | null>(null);

interface ContextProviderProps {
    children: ReactNode;
}

const dummy: dataTypeAll[] = [{
    id: 1,
    title: "Kp",
    data: [{id: "Kp1", value: 12563.7534}, {id: "kp2", value: 12563.7534}]
}]

const ContextProvider: FC<ContextProviderProps> = ({children}) => {
    const [data, setData] = useState<dataTypeAll[] | []>([]);

    useEffect(() => {
        setData(dummy)
    }, [])


    return (
        <Context.Provider value={{data, setData}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};