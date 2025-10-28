import styles from "./inputTask.module.scss"
import React, {JSX, RefObject, useEffect, useRef, useState} from "react";
import {InputTaskComponentProps} from "../type/type";

const InputTask = (props: InputTaskComponentProps): JSX.Element => {
    const {ref, saveData} = props;
    const [change, setChange] = useState<string>("");
    const [dataInput, setDataInput] = useState<string>("");
    const [refOb, setRefOb] = useState<HTMLInputElement | null>(null);
    const elInputRef = useRef<HTMLInputElement>(null) as RefObject<HTMLInputElement>;
    useEffect(() => {
        setRefOb(elInputRef.current);
        ref(refOb);
    }, [refOb]);

    const pressKeyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            setChange(e.target.value);
    }
    const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setDataInput(change)
        }
    }
    useEffect(() => {
        saveData(change)
    }, [change]);

    return (
        <input ref={elInputRef} id={"inputTask"} type="text" onChange={pressKeyHandler} onKeyDown={keyDown} className={styles.inputTask}/>
    );
};

export default InputTask;