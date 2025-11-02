import {createContext, JSX, useCallback, useEffect, useMemo, useState} from "react";
import { defaultValue, tasksBacklog, tasksReady, tasksProgress, tasksFinished } from "../default/default";
import {arrayTask, TaskBacklog, taskData, TaskFinished, TaskProgress, TaskReady} from "../type/type";
import {Tasks} from "../tasks/Tasks";


export const MainContext = createContext<arrayTask>(defaultValue)
export default function Main(): JSX.Element {
    const [data, setData] = useState<arrayTask>(defaultValue);
    const [tasksListBacklog, setTasksListBacklog] = useState<TaskBacklog>(tasksBacklog);
    const [tasksListReady, setTasksListReady] = useState<TaskReady>(tasksReady);
    const [tasksListProgress, setTasksListProgress] = useState<TaskProgress>(tasksProgress);
    const [tasksListFinished, setTasksListFinished] = useState<TaskFinished>(tasksFinished);
    const [addReady, setAddReady] = useState<taskData | null>(null);
    const newListBacklog = (list: taskData) => {
        setTasksListBacklog({...tasksListBacklog, taskData: [...tasksListBacklog.taskData, list]})
    };
    const newListReady = (list: taskData[]) => {
        setTasksListReady({...tasksListReady, taskData: [...tasksListReady.taskData, list[0]]})
    }
    useEffect(() => {
        setTasksListBacklog({...tasksListBacklog, taskData: tasksListBacklog.taskData.filter(task => tasksListReady.taskData.some((value) => value.id !== task.id))})
    }, [tasksListReady]);
    // const addTaskReady = (task: taskData) => {
    //     setAddReady(task)
    // }
    console.log("!!", tasksListBacklog);
    return (
        <MainContext.Provider value={data}>
            <div className="wrapper">
                <Tasks taskList={tasksListBacklog} newList={newListBacklog} dropList={false} name={"Backlog"}/>
                <Tasks taskList={tasksListReady} newList={newListReady} dropList dropArray={tasksListBacklog} name={"Ready"}/>
            </div>
        </MainContext.Provider>
    )
}