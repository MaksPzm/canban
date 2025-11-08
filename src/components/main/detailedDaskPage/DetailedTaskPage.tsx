import {ChangeEvent, JSX, useContext, useEffect, useState} from "react";
import {DeleteTaskComponentProps, taskData} from "../../type/type";
import styles from  "./detailedTaskPage.module.scss"
import {MainCreate} from "../Main";
import line from "./images/svg/Line 2.svg";
import line2 from "./images/svg/Line 3.svg";

const DetailedTaskPage = (props: DeleteTaskComponentProps): JSX.Element => {
    const { className = "",

    } = props;
    const {tasksListBacklog, setTasksListBacklog,
        tasksListReady, setTasksListReady,
        tasksListProgress, setTasksListProgress,
        tasksListFinished, setTasksListFinished,
        selectedTask, setSelectedTask} = useContext(MainCreate);
    const [dataSelected, setDataSelected] = useState<taskData[]>([{id: "", name: "", description: ""}]);
    const [indexTask, setIndexTask] = useState<number | null>(null);
    useEffect(() => {
        if (selectedTask.category === "Backlog") {
            setDataSelected(tasksListBacklog.taskData.filter((task: taskData) => task.id == selectedTask.id));
            setIndexTask(tasksListBacklog.taskData.findIndex((task: taskData) => task.id == selectedTask.id));
        }
        if (selectedTask.category === "Ready") {
            setDataSelected(tasksListReady.taskData.filter((task: taskData) => task.id == selectedTask.id));
            setIndexTask(tasksListReady.taskData.findIndex((task: taskData) => task.id == selectedTask.id));
        }
        if (selectedTask.category === "In progress") {
            setDataSelected(tasksListProgress.taskData.filter((task: taskData) => task.id == selectedTask.id));
            setIndexTask(tasksListProgress.taskData.findIndex((task: taskData) => task.id == selectedTask.id));
        }
        if (selectedTask.category === "Finished") {
            setDataSelected(tasksListFinished.taskData.filter((task: taskData) => task.id == selectedTask.id));
            setIndexTask(tasksListFinished.taskData.findIndex((task: taskData) => task.id == selectedTask.id));
        }
    }, [selectedTask]);
    const onChangeNameTask = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDataSelected([{...dataSelected[0],  name: event.target.value}]);
    }
    const onChangeDescriptionTask = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDataSelected([{...dataSelected[0], description: event.target.value}]);
    }
    const onClickClose = () => {
        if (selectedTask.category === "Backlog") {
            if (indexTask !== null) {
                const newList = tasksListBacklog.taskData.map((task: taskData, index: number) => (index === indexTask) ? dataSelected[0] : task);
                setTasksListBacklog({...tasksListBacklog, taskData: newList});
            }
        }
        if (selectedTask.category === "Ready") {
            if (indexTask !== null) {
                const newList = tasksListReady.taskData.map((task: taskData, index: number) => (index === indexTask) ? dataSelected[0] : task);
                setTasksListReady({...tasksListReady, taskData: newList});
            }
        }
        if (selectedTask.category === "In Progress") {
            if (indexTask !== null) {
                const newList = tasksListProgress.taskData.map((task: taskData, index: number) => (index === indexTask) ? dataSelected[0] : task);
                setTasksListProgress({...tasksListProgress, taskData: newList});
            }
        }
        if (selectedTask.category === "Finished") {
            if (indexTask !== null) {
                const newList = tasksListFinished.taskData.map((task: taskData, index: number) => (index === indexTask) ? dataSelected[0] : task);
                setTasksListFinished({...tasksListFinished, taskData: newList});
            }
        }
        setSelectedTask({...setSelectedTask,  clickedTask: false});
    }
    return (
        <div className={`${className} ${styles.detailedTaskPage}`}>
            <textarea className={styles.detailedTaskPage__name} defaultValue={dataSelected[0].name} onChange={onChangeNameTask} />
            <textarea className={styles.detailedTaskPage__description} defaultValue={dataSelected[0].description} onChange={onChangeDescriptionTask} />
            <div className={styles.detailedTaskPage__close} onClick={onClickClose}>
                <img src={line} className={styles.detailedTaskPage__close_img} alt="line"/>
                <img src={line2} className={styles.detailedTaskPage__close_img} alt="line"/>
            </div>
        </div>
    );
};
export default DetailedTaskPage;