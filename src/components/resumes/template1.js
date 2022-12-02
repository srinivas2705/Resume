import React from "react";
import { useSelector } from "react-redux";
import "../../styles/template.css";

export default function Template1(){
    const personaldetails = useSelector((state) => state.personaldetails.value);
    return(
        <div className="template">
            <p>Job Title: {personaldetails.jobtitle}</p>
            <p>Name: {personaldetails.firstname}  {personaldetails.lastname}</p>
            <p>Email:  {personaldetails.email}</p>
            <p>Number: {personaldetails.phone}</p>
            <p>Country: {personaldetails.country}</p>
            <p>City: {personaldetails.city}</p>
            <p>Address: {personaldetails.address}</p>
            <p>Postal Code: {personaldetails.postalcode}</p>
        </div>
    )
}