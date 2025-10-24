import { JSX, useContext, useState } from "react";
import { TaskComponentProps } from "../type/type";
import { MainContext } from "../main/Main";
import { TaskBacklog, TaskReady, TaskProgress, TaskFinished } from "../type/type";


export default function Tasks(props: TaskComponentProps): JSX.Element {
    const {
        name = ""
    } = props;
    const def = useContext(MainContext);
    const [defBacklog, setDefBacklog] = useState<TaskBacklog>(def[0]);
    const [defReady, setDefReady] = useState<TaskReady>(def[1]);
    const [defProgress, setDefProgress] = useState<TaskProgress>(def[2]);
    const [defFinished, setDefFinished] = useState<TaskFinished>(def[3]);
    return (
        <div className="tasks">
            <h1>{name}</h1>
            <div>
                <ul>
                    
                </ul>
            </div>
        </div>
    )
}