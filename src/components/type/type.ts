import {Dispatch, SetStateAction} from "react";

type defaultCreat = {
    active: string;
    finished: string;
}

export interface DefaultLayout {
    context: defaultCreat
    setContext: Function;
}

export interface taskData {
        id: string,
        name: string,
        description: string
}

export interface TaskBacklog {
    title: 'Backlog',
    taskData: taskData[] | []
}
export interface TaskReady {
    title: 'Ready',
    taskData: taskData[] | []
}
export interface TaskFinished {
    title: "Finished",
    taskData: taskData[] | []
}
export interface TaskProgress {
    title: "In progress",
    taskData: taskData[] | []
}

export interface SelectedTask {category: string, id: string, clickedTask: boolean}

export type DefaultValue = {
    tasksListBacklog: TaskBacklog;
    tasksListReady: TaskReady;
    tasksListProgress: TaskProgress;
    tasksListFinished: TaskFinished;
    selectedTask: SelectedTask;
    setTasksListBacklog: Function;
    setTasksListReady: Function;
    setTasksListProgress: Function;
    setTasksListFinished: Function;
    setSelectedTask: Function;
};

export interface TaskComponentProps {
    name: string,
    taskList: TaskBacklog | TaskReady | TaskProgress | TaskFinished;
    newList: Function;
    dropList: boolean
    dropArray?: TaskBacklog | TaskReady | TaskProgress | TaskFinished;
}

export interface BtnTaskComponentProps {
    name: string,
    type: 'button' | 'submit',
    className: string,
    clickBtn: Function,
    disabled: boolean,
    clickSubmit?: Function,
}

export interface InputTaskComponentProps {
    ref: Function,
    saveData: Function,
    save: boolean
}

export interface DropBlockComponentProps {
    className: string;
    dropArray?: TaskBacklog | TaskReady | TaskProgress | TaskFinished;
    clickDropTask: Function;
    btnDrop: {btnTask: boolean, setBtnTask:  Dispatch<SetStateAction<boolean>>};
}

export interface TaskListComponentProps {
    taskList: TaskBacklog | TaskReady | TaskProgress | TaskFinished;
    className: string;
}

export interface DeleteTaskComponentProps {
    className: string;
}

//footer
export interface NumberTasksComponentProps {
    className: string;
}