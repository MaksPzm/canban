import {JSX, useCallback, useState} from "react";
import {BtnTaskComponentProps} from "../type/type";
import styles from "./btnTask.module.scss"

const BtnTask = (props: BtnTaskComponentProps): JSX.Element => {
    const [sub, setSub] = useState<boolean>(true);
    const {
        type = "button",
        name,
        className,
        clickBtn
    } = props;
    const pressBtn = useCallback(() => {
        setSub(!sub);
        clickBtn(sub);
    }, [sub, clickBtn])
    return (
        <button type={type} className={`${className} ${styles.btn}`} onClick={pressBtn}>{name}</button>
    );
};

export default BtnTask;