import React from "react";
import { Progress } from "reactstrap";
import Personaldetails from "./personaldetails";

export default function Form(){
    return(
        <div>
            <p>Title</p>
            <p>Language</p>
            <Progress value={50}/>
            <Personaldetails/>
        </div>
    )
}