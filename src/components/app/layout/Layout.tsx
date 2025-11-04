import {createContext, JSX, useMemo, useState} from "react";
import Header from "../../header/Header";
import Main from "../../main/Main";
import Footer from "../../footer/Footer";
import {defaultLayouts} from "../../default/default";
import {DefaultLayout} from "../../type/type";

export const LayoutCreate = createContext<DefaultLayout>(defaultLayouts);

export default function Layout(): JSX.Element {
    const [context, setContext] = useState<DefaultLayout>(defaultLayouts);
    const contextActiveUndFinished: DefaultLayout = useMemo(() => ({context: context.context, setContext}), [context.context]);
    return (
        <LayoutCreate.Provider value={contextActiveUndFinished}>
            <div className="layout">
                <Header />
                <Main/>
                <Footer/>
            </div>
        </LayoutCreate.Provider>

    );
}