import {RefObject} from "react";

export interface taskData {
        id: string,
        name: string,
        description: string
}

export interface TaskBacklog {
    title: 'Backlog',
    taskData: taskData[]
}
export interface TaskReady {
    title: 'Ready',
    taskData: taskData[]
}
export interface TaskFinished {
    title: "Finished",
    taskData: taskData[]
}
export interface TaskProgress {
    title: "In progress",
    taskData: taskData[]
}
export type arrayTask = [TaskBacklog, TaskReady, TaskProgress, TaskFinished];

export interface TaskComponentProps {
    name: string,
    taskList: TaskBacklog | TaskReady | TaskProgress | TaskFinished;
    newList: Function;
}

export interface BtnTaskComponentProps {
    name: string,
    type: 'button' | 'submit',
    className: string,
    clickBtn: Function,
    clickSubmit?: Function,
}

export type liRef = RefObject<HTMLLIElement>;

export interface InputTaskComponentProps {
    ref: Function,
    saveData: Function,
    save: boolean
}