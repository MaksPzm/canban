import {createContext, JSX, useCallback, useEffect, useMemo, useState} from "react";
import { defaultValue, tasksBacklog, tasksReady, tasksProgress, tasksFinished } from "../default/default";
import {arrayTask, TaskBacklog, taskData, TaskFinished, TaskProgress, TaskReady} from "../type/type";
import {Tasks} from "../tasks/Tasks";


export const MainContext = createContext<arrayTask>(defaultValue)
export default function Main(): JSX.Element {
    const backlog: TaskBacklog = localStorage.getItem("backlog") ? (JSON.parse(localStorage.getItem("backlog") as string)) : tasksBacklog;
    const ready: TaskReady = localStorage.getItem("ready") ? (JSON.parse(localStorage.getItem("ready") as string)) : tasksReady;
    const progress: TaskProgress = localStorage.getItem("progress") ? (JSON.parse(localStorage.getItem("progress") as string)) : tasksProgress;
    const finished: TaskFinished = localStorage.getItem("finished") ? (JSON.parse(localStorage.getItem("finished") as string)) : tasksFinished;
    console.log(" backlog",  backlog);
    const [data, setData] = useState<arrayTask>(defaultValue);
    const [tasksListBacklog, setTasksListBacklog] = useState<TaskBacklog>(backlog);
    const [tasksListReady, setTasksListReady] = useState<TaskReady>(ready);
    const [tasksListProgress, setTasksListProgress] = useState<TaskProgress>(progress);
    const [tasksListFinished, setTasksListFinished] = useState<TaskFinished>(finished);
    const newListBacklog = (list: taskData) => {
        setTasksListBacklog({...tasksListBacklog, taskData: [...tasksListBacklog.taskData, list]})
    };
    const newListReady = (list: taskData[]) => {
        setTasksListReady({...tasksListReady, taskData: [...tasksListReady.taskData, list[0]]})
    }
    const newListProgress = (list: taskData[]) => {
        setTasksListProgress({...tasksListProgress, taskData: [...tasksListProgress.taskData, list[0]]})
    }
    const newListFinished = (list: taskData[]) => {
        setTasksListFinished({...tasksListFinished, taskData: [...tasksListFinished.taskData, list[0]]})
    }
    useEffect(() => {
        localStorage.setItem("backlog", JSON.stringify(tasksListBacklog));
        localStorage.setItem("ready", JSON.stringify(tasksListReady));
        localStorage.setItem("progress", JSON.stringify(tasksListProgress));
        localStorage.setItem("finished", JSON.stringify(tasksListFinished));
    }, [tasksListBacklog, tasksListReady, tasksListProgress, tasksListFinished]);
    useEffect(() => {
        const excludeIds = tasksListReady.taskData.map((task: taskData) => task.id); // мы составляем массив id которые нужно исключить
        // создаем копию объекта с помощью ..., и указывает на то, что нам нужно в этой копии изменить taskData.
        // в taskData с помощью метода filter исключяем объекты, которые есть в excludesIds.
        setTasksListBacklog({...tasksListBacklog, taskData: tasksListBacklog.taskData.filter((item: taskData) => !excludeIds.includes(item.id))});
    }, [tasksListReady]);
    useEffect(() => {
        const excludeIds = tasksListProgress.taskData.map((task: taskData) => task.id);
        setTasksListReady({...tasksListReady, taskData: tasksListReady.taskData.filter((item: taskData) => !excludeIds.includes(item.id))});
    }, [tasksListProgress]);
    useEffect(() => {
        const excludeIds = tasksListFinished.taskData.map((task: taskData) => task.id);
        setTasksListProgress({...tasksListProgress, taskData: tasksListProgress.taskData.filter((item: taskData) => !excludeIds.includes(item.id))});
    }, [tasksListFinished]);
    return (
        <MainContext.Provider value={data}>
            <div className="wrapper">
                <Tasks taskList={tasksListBacklog} newList={newListBacklog} dropList={false} name={"Backlog"}/>
                <Tasks taskList={tasksListReady} newList={newListReady} dropList dropArray={tasksListBacklog} name={"Ready"}/>
                <Tasks taskList={tasksListProgress} newList={newListProgress} dropList dropArray={tasksListReady} name={"In Progress"}/>
                <Tasks taskList={tasksListFinished} newList={newListFinished} dropList dropArray={tasksListProgress} name={"Finished"}/>
            </div>
        </MainContext.Provider>
    )
}