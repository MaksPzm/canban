import {JSX, useContext} from "react";
import {DeleteTaskComponentProps} from "../../type/type";
import styles from  "./detailedTaskPage.module.scss"
import {MainCreate} from "../Main";

const DetailedTaskPage = (props: DeleteTaskComponentProps): JSX.Element => {
    const { className = "",

    } = props;
    const {tasksListBacklog, setTasksListBacklog,
        tasksListReady, setTasksListReady,
        tasksListProgress, setTasksListProgress,
        tasksListFinished, setTasksListFinished} = useContext(MainCreate);
    return (
        <div className={`${className} ${styles.detailedTaskPage}`}>

        </div>
    );
};
export default DetailedTaskPage