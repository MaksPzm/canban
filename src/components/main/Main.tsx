import {createContext, JSX, useCallback, useEffect, useMemo, useState} from "react";
import { defaultValue } from "../default/default";
import {arrayTask, taskData} from "../type/type";
import {Tasks} from "../tasks/Tasks";


export const MainContext = createContext<arrayTask>(defaultValue)
export default function Main(): JSX.Element {
    const [data, setData] = useState<arrayTask>(defaultValue);
    const [backlog, setBacklog] = useState<taskData[] | null>(null);
    // const newList= useMemo(() => ({setData}), [setData]);
    const newListBacklog = (list: taskData[]) => {setBacklog(list)};
    useEffect(() => {
        // setData([...data, data[0].taskData.map());
    }, [backlog]);
    console.log("backlog", backlog)
    return (
        <MainContext.Provider value={data}>
            <div className="wrapper">
                <Tasks taskList={data[0]} newList={newListBacklog}  name={"Backlog"}/>
                <Tasks taskList={data[1]} newList={newListBacklog} name={"Ready"}/>
            </div>
        </MainContext.Provider>
    )
}