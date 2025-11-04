import {JSX, useEffect, useState} from "react";
import styles from "./dropBlock.module.scss"
import {DropBlockComponentProps, taskData} from "../../type/type";

const DropBlock = (props: DropBlockComponentProps): JSX.Element => {
    const {
        className = "",
        dropArray,
        clickDropTask,
        btnDrop
    } = props;
    const {btnTask, setBtnTask } = btnDrop;
    const [addTask, setAddTask] = useState<taskData[] | []>([]);
    const onClickListItem = (event: any) => {
        event.stopPropagation();
        const idElement = event.target.id;
        if (dropArray !== undefined) setAddTask(dropArray.taskData.filter(task => task.id === idElement));
    }
    useEffect(() => {
        if (addTask.length > 0) clickDropTask(addTask.map((task: taskData) => task));
    }, [addTask]);
    return (
        <div className={`${className} ${styles.drop}`} onClick={(e) => setBtnTask(!btnTask)}>
            <div className={styles.drop__line}></div>
            <ul className={`tasks__drop_list ${styles.drop__list}`}>
                {dropArray !== undefined &&
                    dropArray.taskData.map((task) => (
                    <li key={task.id} id={task.id} onClick={onClickListItem} className={`tasks__drop_list_item ${styles.drop__list_item}`}>{task.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DropBlock;