import React from "react";
import { useSelector } from "react-redux";
import "../../styles/template.css";

export default function Template1() {
    const personaldetails = useSelector((state) => state.personaldetails.value);
    const educationState = useSelector(state => state.education.value);
    const internshipState = useSelector(state => state.internship.value);
    const coursesState = useSelector(state => state.courses.value);
    const referencesState = useSelector(state => state.reference.value);
    const extraCurricState = useSelector(state => state.extracurrics.value);
    const languagesState = useSelector(state => state.languages.value);
    const linksState = useSelector(state => state.links.value);
    const employmentState = useSelector(state => state.employment.value);
    return (
        <div>
            <h1>Resume</h1>
            <div className="template">
                <p>Job Title: {personaldetails.jobtitle}</p>
                <p>Name: {personaldetails.firstname}  {personaldetails.lastname}</p>
                <p>Email:  {personaldetails.email}</p>
                <p>Number: {personaldetails.phone}</p>
                <p>Address: {personaldetails.address}</p>
                <p>City: {personaldetails.city}</p>
                <p>Postal Code: {personaldetails.postalcode}</p>
                <p>Country: {personaldetails.country}</p>
            </div>
            <div className="summary1">
                <h4>Professional Summary</h4>
                <p>{personaldetails.summary}</p>
            </div>

            <h4>Employment History</h4>
            <div>
                {employmentState.map((e) => {
                    return (
                        <div>
                            <p> {e.jobTitle}</p>
                            <p>{e.employer}</p>
                            <p>{e.start}</p>
                            <p>{e.end}</p>
                            <p>{e.city}</p>
                            <p>{e.description}</p>
                        </div>
                    )
                })}
            </div>

            <h4>Education History</h4>
            <div>
                {educationState.map((e) => {
                    return (
                        <div>
                            <p>{e.school}</p>
                            <p>{e.degree}</p>
                            <p>{e.start}</p>
                            <p>{e.end}</p>
                            <p>{e.city}</p>
                            <p>{e.desc}</p>
                        </div>
                    )
                })}
            </div>

            <h4>Internship History</h4>

            <div>
                {internshipState.map((e) => {
                    return (
                        <div>
                            <p>{e.internship}</p>
                            <p>{e.employer}</p>
                            <p>{e.start}</p>
                            <p>{e.end}</p>
                            <p>{e.city}</p>
                            <p>{e.desc}</p>
                        </div>
                    )
                })}
            </div>

            {/* <h4>Courses</h4>
            {coursesState.map((e) => {
                return (
                    <div>
                        <p>{e.course}</p>
                        <p>{e.institution}</p>
                        <p>{e.start}</p>
                        <p>{e.end}</p>
                    </div>
                )
            })} */}

            <h4>References</h4>
            {referencesState.map((e) => {
                return (
                    <div>
                        <p>{e.name}</p>
                        <p>{e.company}</p>
                        <p>{e.phone}</p>
                        <p>{e.email}</p>
                    </div>
                )
            })}

            <h4>Website & Social Links</h4>

            {linksState.map((e) => {
                return (
                    <div>
                        <p>{e.title}</p>
                        <p>{e.url}</p>
                    </div>
                )
            })}

            <h4>Languages</h4>
            {languagesState.map((e) => {
                return (
                    <div>
                        <p>{e.name}</p>
                        <p>{e.proficiency}</p>
                    </div>
                )
            })}

            <h4>Extra-Curricular Activities</h4>
            {extraCurricState.map((e) => {
                return (
                    <div>
                        <p>{e.name}</p>
                        <p>{e.organisation}</p>
                        <p>{e.city}</p>
                        <p>{e.start}</p>
                        <p>{e.end}</p>
                        <p>{e.desc}</p>
                    </div>
                )
            })}



        </div>
    )
}