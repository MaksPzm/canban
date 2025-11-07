import {JSX, useContext, useEffect, useState} from "react";
import {taskData} from "../../type/type";
import {Tasks} from "../tasks/Tasks";
import {MainCreate} from "../Main";

export default function TaskBlock(): JSX.Element {
    const {tasksListBacklog, setTasksListBacklog,
    tasksListReady, setTasksListReady,
    tasksListProgress, setTasksListProgress,
    tasksListFinished, setTasksListFinished} = useContext(MainCreate);

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
    }, [tasksListFinished]);    return (
        <div className="wrapper">
            <Tasks taskList={tasksListBacklog} newList={newListBacklog} dropList={false} name={"Backlog"}/>
            <Tasks taskList={tasksListReady} newList={newListReady} dropList dropArray={tasksListBacklog} name={"Ready"}/>
            <Tasks taskList={tasksListProgress} newList={newListProgress} dropList dropArray={tasksListReady} name={"In Progress"}/>
            <Tasks taskList={tasksListFinished} newList={newListFinished} dropList dropArray={tasksListProgress} name={"Finished"}/>
        </div>
    );
}