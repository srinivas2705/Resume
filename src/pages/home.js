import React from "react";
import Form from "../components/form";
import Resume from "../components/resume";
import "../styles/home.css";

export default function Home() {
    return (
        <div className="home1">
            <Form />
            <Resume />
        </div>
    )
}