import {createContext, JSX, useContext, useEffect, useMemo, useState} from "react";
import TaskBlock from "./taskBlock/TaskBlock";
import {defaultValue, tasksBacklog, tasksFinished, tasksProgress, tasksReady} from "../default/default";
import {SelectedTask, TaskBacklog, TaskFinished, TaskProgress, TaskReady} from "../type/type";
import {LayoutCreate} from "../app/layout/Layout";
import DetailedTaskPage from "./detailedDaskPage/DetailedTaskPage";
import {Route, Routes} from "react-router";
import taskList from "./taskList/TaskList";

export const MainCreate = createContext(defaultValue)
export default function Main(): JSX.Element {
    const backlog: TaskBacklog = localStorage.getItem("backlog") ? (JSON.parse(localStorage.getItem("backlog") as string)) : tasksBacklog;
    const ready: TaskReady = localStorage.getItem("ready") ? (JSON.parse(localStorage.getItem("ready") as string)) : tasksReady;
    const progress: TaskProgress = localStorage.getItem("progress") ? (JSON.parse(localStorage.getItem("progress") as string)) : tasksProgress;
    const finished: TaskFinished = localStorage.getItem("finished") ? (JSON.parse(localStorage.getItem("finished") as string)) : tasksFinished;
    const [tasksListBacklog, setTasksListBacklog] = useState<TaskBacklog>(backlog);
    const [tasksListReady, setTasksListReady] = useState<TaskReady>(ready);
    const [tasksListProgress, setTasksListProgress] = useState<TaskProgress>(progress);
    const [tasksListFinished, setTasksListFinished] = useState<TaskFinished>(finished);
    const [selectedTask, setSelectedTask] = useState<SelectedTask>({category: "", id: "", clickedTask: false});
    const {setContext} = useContext(LayoutCreate);
    const defaultMainValue = useMemo(() => (
        {tasksListBacklog, setTasksListBacklog, tasksListReady, setTasksListReady,
            tasksListProgress, setTasksListProgress, tasksListFinished, setTasksListFinished,
            selectedTask, setSelectedTask
        }),
        [tasksListBacklog, setTasksListProgress, tasksListFinished, setTasksListFinished, tasksListReady, tasksListProgress, selectedTask])
    useEffect(() => {
        localStorage.setItem("backlog", JSON.stringify(tasksListBacklog));
        localStorage.setItem("ready", JSON.stringify(tasksListReady));
        localStorage.setItem("progress", JSON.stringify(tasksListProgress));
        localStorage.setItem("finished", JSON.stringify(tasksListFinished));
        setContext({context: {active: `${tasksListBacklog.taskData.length}`, finished: `${tasksListFinished.taskData.length}`}});
    }, [tasksListBacklog, tasksListReady, tasksListProgress, tasksListFinished]);
    const navigationRoutes = [
        {path: "/", element: <TaskBlock/>},
        {path: `/tasks/${selectedTask.id}`, element: <DetailedTaskPage className={"detailedTaskPage"}/>},
        {path: `/tasks/${selectedTask.id}`, element: <DetailedTaskPage className={"detailedTaskPage"}/>},
        {path: `/tasks/${selectedTask.id}`, element: <DetailedTaskPage className={"detailedTaskPage"}/>},
        {path: `/tasks/${tasksListFinished.taskData.map(task => task.id)}`, element: <DetailedTaskPage className={"detailedTaskPage"}/>},
    ]
    return (
        <MainCreate.Provider value={defaultMainValue}>
            <div className="wrapper">
                <Routes>
                    {navigationRoutes.map((route) => (<Route key={route.path} path={route.path} element={route.element} />))}
                </Routes>
            </div>
        </MainCreate.Provider>
    )
}