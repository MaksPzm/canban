import { JSX } from "react";
import Profile from "../profile/Profile";
export default function Header(): JSX.Element {
    return (
        <div className="header">
            <section className="header__section">
                <h1 className="header__title">Awesome Kanban Board</h1>
                <Profile/>
            </section>
        </div>
    )
}