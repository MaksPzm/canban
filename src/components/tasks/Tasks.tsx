import {JSX, useCallback, useContext, useEffect, useRef, useState} from "react";
import {TaskComponentProps, taskData} from "../type/type";
import { MainContext } from "../main/Main";
import BtnTask from "../btnTask/BtnTask";
import InputTask from "../inputTask/InputTask";
import DropBlock from "../dropBlock/DropBlock";

export function Tasks(props: TaskComponentProps): JSX.Element {
    const {
        name = "",
        taskList,
        newList,
        dropList,
        dropArray,
    } = props;

    const [btnTask, setBtnTask] = useState<boolean>(false);
    const dev = useContext(MainContext);
    const [input, setInput] = useState<HTMLInputElement | null>(null);
    const [saveInput, setSaveInput] = useState<string | null>(null);
    const inputRef = (e: HTMLInputElement) => {
        setInput(e);
    }
    const clickBtn = (boolean: boolean) => {
        setBtnTask(boolean);
    }

    useEffect(() => {
        if (input !== null) {
            input.focus()
        }
    }, [clickBtn]);
    const saveData = (name: any) => {
        setSaveInput(name);
    }
    const clickSubmit = (e: Event) => {
        e.preventDefault();
        if (name === "Backlog" && saveInput !== null) {
            newList({id: `${taskList.taskData.length}`, name: saveInput, description: "Fix all the bugs"})
        }
    }
    const clickDropTask = (task: taskData) => {
        newList(task)
    }
    return (
        <div className="tasks">
            <h1 className="tasks__title">{name}</h1>
            <div className="tasks__section">
                <ul className="tasks__section_list">
                    {taskList.taskData.length > 0 && taskList.taskData.map((backlog, index) => (
                        <li key={backlog.id} id={`${backlog.id}`} className="tasks__section_list_item">
                            <a className="tasks__section_list_item_link">{backlog.name}</a>
                        </li>
                    ))}
                    {btnTask && !dropList && <li onClick={() => input !== null && input.focus()}
                                    className="tasks__section_list_item list__item_inp"><InputTask ref={inputRef}
                                                                                                   save={btnTask}
                                                                                                   saveData={saveData}/>
                    </li>}
                </ul>
            </div>
            {!btnTask
                ? <BtnTask name={"+ Add card"} type={"button"} className={"tasks__btn"} clickBtn={clickBtn}/>
                : !dropList ? <BtnTask name={"Submit"} type={"submit"} className={"tasks__btn_sub"} clickBtn={clickBtn}
                           clickSubmit={clickSubmit}/>
                    : <DropBlock className={"tasks__drop"} dropArray={dropArray} clickDropTask={clickDropTask}/>}
        </div>
    )
}