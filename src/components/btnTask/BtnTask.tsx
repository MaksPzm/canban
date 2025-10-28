import React, {JSX, MouseEventHandler, useCallback, useState} from "react";
import {BtnTaskComponentProps} from "../type/type";
import styles from "./btnTask.module.scss"

const BtnTask = (props: BtnTaskComponentProps): JSX.Element => {
    const [sub, setSub] = useState<boolean>(true);
    const {
        type = "button",
        name,
        className,
        clickBtn,
        clickSubmit
    } = props;
    const pressBtn = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        setSub(!sub);
        clickBtn(sub);
        if (clickSubmit) clickSubmit(event);

    }, [sub, clickBtn, clickSubmit])
    return (
        <button type={type} className={`${className} ${styles.btn}`} onClick={pressBtn}>{name}</button>
    );
};

export default BtnTask;