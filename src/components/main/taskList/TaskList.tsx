import {JSX} from "react";
import {TaskListComponentProps} from "../../type/type";

const TaskList = (props: TaskListComponentProps): JSX.Element => {
    const {taskList, className = ""} = props;
    return (
        <>
            {taskList.taskData.length > 0
                ? taskList.taskData.map((backlog) => (
                    backlog.name !== undefined &&
                    <li key={backlog.id} id={`${backlog.id}`} className={className}>
                        <a className="tasks__section_list_item_link">{backlog.name}</a>
                    </li>
                    ))
                : null
            }
        </>
    );
};

export default TaskList;