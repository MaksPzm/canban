import {arrayTask, TaskBacklog, TaskFinished, TaskProgress, TaskReady} from "../type/type"
import {json} from "node:stream/consumers";

export const defaultValue: arrayTask = [
   {
        title: 'Backlog',
        taskData: [
            {
                id: '1122',
                name: 'Sprint bugfix',
	            description: "Fix all the bugs"
            }
        ]
   },
   {
        title: 'Ready',
        taskData: [
            {
                id: '',
                name: '',
	            description: "Fix all the bugs"
            }
        ]
   },
   {
        title: 'In progress',
        taskData: [
            {
                id: '',
                name: '',
	            description: "Fix all the bugs"
            }
        ]
   },
   {
        title: 'Finished',
        taskData: [
            {
                id: '',
                name: '',
	            description: "Fix all the bugs"
            }
        ]
   },
];

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