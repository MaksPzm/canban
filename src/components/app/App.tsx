import { JSX } from "react";
import "../styles/styles.scss"
import Layout from "./layout/Layout";
import {BrowserRouter} from "react-router";

export default function App(): JSX.Element {
   return (
       <BrowserRouter>
           <Layout />
       </BrowserRouter>
   ) 
}