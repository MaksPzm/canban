import { JSX } from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import "../styles/styles.scss"

export default function App(): JSX.Element {
   return (
    <div className="layout">
        <Header />
        <Main/>
        <Footer/>    
    </div>
   ) 
}