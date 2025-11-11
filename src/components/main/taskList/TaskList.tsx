import React, {JSX, RefObject, useContext, useEffect, useRef, useState} from "react";
import {SelectedTask, taskData, TaskListComponentProps} from "../../type/type";
import {MainCreate} from "../Main";
import {useNavigate} from "react-router";

const TaskList = (props: TaskListComponentProps): JSX.Element => {
    const {setSelectedTask} = useContext(MainCreate);
    const navigate = useNavigate();
    const {taskList, className = ""} = props;
    const LiElementRef = useRef<HTMLLIElement | null>(null) as RefObject<HTMLLIElement>;
    const [clickedTask, setClickedTask] = useState<SelectedTask>({category: "", id: "", clickedTask: false});
    const onClickLiElement = (event: React.MouseEvent) => {
        if (LiElementRef !== null) {
            LiElementRef.current?.setAttribute("taskName", taskList.title)
            setClickedTask({category: `${LiElementRef.current?.attributes[2].nodeValue}`, id: event.currentTarget.id, clickedTask: true});
            if (taskList.title == "Backlog") navigate(`/tasks/${taskList.taskData.filter((task: taskData) => task.id == event.currentTarget.id)[0].id}`);
            if (taskList.title == "Ready") navigate(`/tasks/${taskList.taskData.filter((task: taskData) => task.id == event.currentTarget.id)[0].id}`);
            if (taskList.title == "In progress") navigate(`/tasks/${taskList.taskData.filter((task: taskData) => task.id == event.currentTarget.id)[0].id}`);
            if (taskList.title == "Finished") navigate(`/tasks/${taskList.taskData.filter((task: taskData) => task.id == event.currentTarget.id)[0].id}`);
        }
    }
    useEffect(() => {
        setSelectedTask(clickedTask)
    }, [clickedTask]);
    return (
        <>
            {taskList.taskData.length > 0
                ? taskList.taskData.map((backlog: taskData) => (
                    backlog.name !== undefined &&
                    <li key={backlog.id} id={`${backlog.id}`} ref={LiElementRef} onClick={onClickLiElement} className={className}>
                        <a className="tasks__section_list_item_link">{backlog.name}</a>
                    </li>
                    ))
                : null
            }
        </>
    );
};

export default TaskList;