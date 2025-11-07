import {JSX, useState} from "react";
import styles from "./profile.module.scss";
import prof from "./images/png/user-avatar.png"

const Profile = (): JSX.Element => {
    const [profile, setProfile] = useState<boolean>(false);
    return (
        <div className={`profile ${styles.profile}`} onClick={() => {setProfile(!profile)}}>
            <div className={`profile__article ${styles.profile__users}`}><img className={styles.profile__users_img} src={prof} alt="фото профиля"/>
                {!profile
                    ? <div className={styles.profile__arrows_open}></div>
                    : <div className={`${styles.profile__arrows_open} ${styles.profile__arrows_close}`}></div>}
            </div>
            {profile &&
                <div className={`profile__block ${styles.profile__block}`}>
                    <div className={styles.profile__block_arrow}></div>
                    <ul className={styles.profile__block_list}>
                        <li className={styles.profile__block_list_item}><a href="#" className={styles.profile__block_list_item_link}>Profile</a></li>
                        <li className={styles.profile__block_list_item}><a href="#" className={styles.profile__block_list_item_link}>Log Out</a></li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default Profile;