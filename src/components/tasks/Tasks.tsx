import { JSX, useContext, useState } from "react";
import { TaskComponentProps } from "../type/type";
import { MainContext } from "../main/Main";
import { TaskBacklog, TaskReady, TaskProgress, TaskFinished } from "../type/type";
import BtnTask from "../btnTask/BtnTask";

export default function Tasks(props: TaskComponentProps): JSX.Element {
    const {
        name = ""
    } = props;
    const [btnTask, setBtnTask] = useState<boolean>(false);
    const dev = useContext(MainContext);
    const [devBacklog, setDevBacklog] = useState<TaskBacklog>(dev[0]);
    const [devReady, setDevReady] = useState<TaskReady>(dev[1]);
    const [devProgress, setDevProgress] = useState<TaskProgress>(dev[2]);
    const [devFinished, setDevFinished] = useState<TaskFinished>(dev[3]);
    const clickBtn = (boolean: boolean) => {
        setBtnTask(boolean)
    }
    console.log("dev", devBacklog.Backlog)
    return (
        <div className="tasks">
            <h1 className="tasks__title">{name}</h1>
            <div className="tasks__section">
                <ul className="tasks__section_list">
                    {devBacklog.Backlog.map((backlog, index) => (
                        <li key={index} id={`${backlog.id}`} className="tasks__section_list_item">
                            <a className="tasks__section_list_item_link">{backlog.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            {!btnTask
                ? <BtnTask name={"+ Add card"} type={"button"} className={"tasks__btn"} clickBtn={clickBtn}/>
                : <BtnTask name={"Submit"} type={"submit"} className={"tasks__btn_sub"} clickBtn={clickBtn}/>}
        </div>
    )
}