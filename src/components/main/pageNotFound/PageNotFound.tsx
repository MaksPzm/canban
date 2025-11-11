import {JSX} from "react";
import styles from "./pageNotFound.module.scss";
import {PageNotFoundProps} from "../../type/type";
import {useNavigate} from "react-router";


const PageNotFound = (props: PageNotFoundProps): JSX.Element => {
    const navigate= useNavigate()
    const onClickBtn = () => {navigate("/")};
    return (
        <div className={`${props.className} ${styles.pageNotFound}`}>
            <h1 className={styles.pageNotFound__title}>Page not found!!!</h1>
            <button type={"button"} className={styles.pageNotFound__btn} onClick={onClickBtn}>main page</button>
        </div>
    );
};
export default PageNotFound;