import { createContext, JSX, useState } from "react";
import { defaultValue } from "../default/default";
import { arrayTask } from "../type/type";
import Tasks from "../tasks/Tasks";


export const MainContext = createContext<arrayTask>(defaultValue)
export default function Main(): JSX.Element {
    const [data, setData] = useState<arrayTask>(defaultValue)
    return (
        <MainContext.Provider value={defaultValue}>
            <div className="wrapper">
                <Tasks name={"Backlog"}/>
                <Tasks name={"Ready"}/>
            </div>
        </MainContext.Provider>
    )
}