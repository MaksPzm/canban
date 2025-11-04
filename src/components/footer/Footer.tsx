import { JSX } from "react";
import NumberTasks from "./numberTasks/NumberTasks";

export default function Footer(): JSX.Element {
    return (
        <div className="footer">
            <section className="footer__section">
                <NumberTasks className={"numberTasks"} />
                <div className="footer__kanbanName">Kanban board by Pankratov, 2025</div>
            </section>

        </div>
    )
}