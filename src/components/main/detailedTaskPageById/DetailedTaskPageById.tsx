import styles from "../detailedDaskPage/detailedTaskPage.module.scss";
import line from "../detailedDaskPage/images/svg/Line 2.svg";
import line2 from "../detailedDaskPage/images/svg/Line 3.svg";
import {DeleteTaskComponentProps, taskData} from "../../type/type";
import {ChangeEvent, JSX, useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {MainCreate} from "../Main";

const DetailedTaskPageById = (props: DeleteTaskComponentProps): JSX.Element => {
    const {taskId} = useParams();
    const { className = "",
    } = props;
    const navigate = useNavigate();
    const {tasksListBacklog, setTasksListBacklog,
        tasksListReady, setTasksListReady,
        tasksListProgress, setTasksListProgress,
        tasksListFinished, setTasksListFinished} = useContext(MainCreate);
    const [tasksBlock, setTasksBlock] = useState<string>("");
    const [taskById, setTaskById] = useState<taskData[] | null>(null);
    const [arrayFound, setArrayFound] = useState<boolean>(false);
    useEffect(() => {
        if (taskId) {
            if (tasksListBacklog.taskData.some(task => task.id === taskId)) {
                setTaskById(tasksListBacklog.taskData.filter((elem) => taskId == elem.id));
                setTasksBlock(tasksListBacklog.title);
                setArrayFound(true);
            }
            if (tasksListReady.taskData.some(task => task.id === taskId)) {
                setTaskById(tasksListReady.taskData.filter((elem) => taskId == elem.id));
                setTasksBlock(tasksListReady.title);
                setArrayFound(true);
            }
            if (tasksListProgress.taskData.some(task => task.id === taskId)) {
                setTaskById(tasksListProgress.taskData.filter((elem) => taskId == elem.id));
                setTasksBlock(tasksListProgress.title);
                setArrayFound(true);
            }
            if (tasksListFinished.taskData.some(task => task.id === taskId)) {
                setTaskById(tasksListFinished.taskData.filter((elem) => taskId == elem.id));
                setTasksBlock(tasksListFinished.title);
                setArrayFound(true);
            }
        }
    }, [taskId]);
    const onChangeNameTask = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (taskById !== null) setTaskById([{...taskById[0], name: event.target.value}])
    }
    const onChangeDescriptionTask = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (taskById !== null) setTaskById([{...taskById[0], description: event.target.value}])
    }
    const onClickClose = () => {
        if (tasksBlock === "Backlog" && taskById !== null) {
                const newList = tasksListBacklog.taskData.map((task: taskData, index: number) => (taskId == task.id) ? taskById[0] : task);
                setTasksListBacklog({...tasksListBacklog, taskData: newList});
        }
        if (tasksBlock === "Ready" && taskById !== null) {
                const newList = tasksListReady.taskData.map((task: taskData, index: number) => (taskId == task.id) ? taskById[0] : task);
                setTasksListReady({...tasksListReady, taskData: newList});
        }
        if (tasksBlock === "In progress" && taskById !== null) {
            const newList = tasksListProgress.taskData.map((task: taskData, index: number) => (taskId == task.id) ? taskById[0] : task);
            setTasksListProgress({...tasksListProgress, taskData: newList});

        }
        if (tasksBlock === "Finished" && taskById !== null) {
                const newList = tasksListFinished.taskData.map((task: taskData, index: number) => (taskId == task.id) ? taskById[0] : task);
                setTasksListFinished({...tasksListFinished, taskData: newList});
        }
        navigate("/");
    }
    return (
        <div className={`${className} ${styles.detailedTaskPage}`}>
            {arrayFound
            ?  <><textarea className={styles.detailedTaskPage__name} defaultValue={taskById ? taskById[0].name : ""} onChange={onChangeNameTask} />
                <textarea className={styles.detailedTaskPage__description} defaultValue={taskById ? taskById[0].description : ""} onChange={onChangeDescriptionTask} /></>
            : <span>"Issue not found"</span>}
            <div className={styles.detailedTaskPage__close} onClick={onClickClose}>
                <img src={line} className={styles.detailedTaskPage__close_img} alt="line"/>
                <img src={line2} className={styles.detailedTaskPage__close_img} alt="line"/>
            </div>
        </div>
    );
};

export default DetailedTaskPageById;