
export interface TaskBacklog {
    title: 'Backlog',
    Backlog: [{
        id: string,
        name: string,
        description: string
    }]
};
export interface TaskReady {
    title: 'Ready',
    Ready: [{
        id: string,
        name: string,
        description: string
    }]
};
export interface TaskFinished {
    title: "Finished",
    Finished: [{
        id: string,
        name: string,
        description: string
    }]
};
export interface TaskProgress {
    title: "In progress",
    Progress: [{
        id: string,
        name: string,
        description: string
    }]
};
export type arrayTask = [TaskBacklog, TaskReady, TaskProgress, TaskFinished];

export interface TaskComponentProps {name: string}

export interface BtnTaskComponentProps {
    name: string,
    type: 'button' | 'submit',
    className: string,
    clickBtn: Function
}