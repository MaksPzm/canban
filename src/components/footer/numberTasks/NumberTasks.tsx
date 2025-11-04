import {JSX, useContext, useEffect, useState} from "react";
import styles from "./numberTasks.module.scss"
import {NumberTasksComponentProps} from "../../type/type"
import {LayoutCreate} from "../../app/layout/Layout";

const NumberTasks = (props: NumberTasksComponentProps): JSX.Element => {
    const {context} = useContext(LayoutCreate);
    const {
        className = "",
    } = props;
    const [active, setActive] = useState<string>("0");
    const [finished, setFinished] = useState<string>("0");
    useEffect(() => {
        setActive(context.active);
        setFinished(context.finished);
    }, [context]);
    return (
        <div className={className}>
            <div className={styles.numberTasks__article}>Active tasks: <span className={styles.numberTasks__article_num}>{active}</span></div>
            <div className={styles.numberTasks__article}>Finished tasks: <span className={styles.numberTasks__article_num}>{finished}</span></div>
        </div>
    );
};

export default NumberTasks;