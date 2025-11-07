import {DefaultLayout, DefaultValue, TaskBacklog, TaskFinished, TaskProgress, TaskReady} from "../type/type"
import {json} from "node:stream/consumers";



export const tasksBacklog: TaskBacklog =  {
    title: 'Backlog',
        taskData: [
        {
            id: '1122',
            name: 'Sprint bugfix',
            description: "Fix all the bugs"
        }
    ]
};

export const tasksReady: TaskReady =  {
    title: 'Ready',
    taskData: []
};

export const tasksProgress: TaskProgress =  {
    title: 'In progress',
    taskData: []
}

export const tasksFinished: TaskFinished =  {
    title: 'Finished',
    taskData: []
}

export const defaultValue: DefaultValue = {
    tasksListBacklog: tasksBacklog,
    tasksListReady: tasksReady,
    tasksListProgress: tasksProgress,
    tasksListFinished: tasksFinished,
} as DefaultValue;

export const defaultLayouts = {context: {active: "0", finished: "0"}} as DefaultLayout;