import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import {Label, Input} from "reactstrap";
import {update} from "../redux/slice/personaldetailsSlice";
import "../styles/personaldetails.css";



export default function Personaldetails() {
    const dispatch = useDispatch();

    const handleUpload = async(event) =>{
        const url="https://api.cloudinary.com/v1_1/dfmul9qmz/image/upload";
        const formData = new FormData();

        formData.append("upload_preset", "resume");
        const file = event.target.files;
        formData.append("file", file[0]);

        const response = await axios.post(url, formData);
        if(response.data.url){
            dispatch(update({
                key: event.target.name,
                value: response.data.url
            }))
        }
    } 

    return (
        <div className="personaldetails">
            <h4>Personal Details</h4>
            <div className="personalgrid">
                <div>
                    <Label for="jobtitle">
                        Job Title
                    </Label>
                    <Input
                        id="jobtitle"
                        name="jobtitle"
                        placeholder="Job Title"
                        type="text"
                        onChange={(e) =>{
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                    <Label for="profile">Upload photo</Label>
                    <Input
                    id="profile"
                    name="profile"
                    type="file"
                    onChange={(e) => handleUpload(e)}
                    />
                </div>

                <div>
                <Label for="first name">
                        First Name
                    </Label>
                    <Input
                        id="fname"
                        name="firstname"
                        placeholder="First Name"
                        type="text"
                        onChange={(e) =>{
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                <Label for="lastname">
                        Last Name
                    </Label>
                    <Input
                        id="lastname"
                        name="lastname"
                        placeholder="Last Name"
                        type="text"
                        onChange={(e) =>{
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                <Label for="Email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        onChange={(e) =>{
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                <Label for="phone">
                        Phone
                    </Label>
                    <Input
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        type="number"
                        onChange={(e) =>{
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                <Label for="country">
                        Country
                    </Label>
                    <Input
                        id="country"
                        name="country"
                        placeholder="Country"
                        type="text"
                        onChange={(e) =>{
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                <Label for="city">
                        City
                    </Label>
                    <Input
                        id="city"
                        name="city"
                        placeholder="City"
                        type="text"
                        onChange={(e) =>{
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                <Label for="address">
                        Address
                    </Label>
                    <Input
                        id="address"
                        name="address"
                        placeholder="Address"
                        type="email"
                        onChange={(e) =>{
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                <Label for="postalcode">
                        Postal Code
                    </Label>
                    <Input
                        id="postalcode"
                        name="postalcode"
                        placeholder="Postal Code"
                        type="number"
                        onChange={(e) =>{
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                <Label for="driving license">
                        Driving License
                    </Label>
                    <Input
                        id="license"
                        name="license"
                        placeholder="Driving License"
                        type="text"
                        onChange={(e) =>{
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                <Label for="nationality">
                        Nationality
                    </Label>
                    <Input
                        id="nationality"
                        name="natioanlity"
                        placeholder="Nationality"
                        type="text"
                        onChange={(e) =>{
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                <Label for="placeof Birth">
                        Place of Birth
                    </Label>
                    <Input
                        id="placeofbirth"
                        name="placeofbirth"
                        placeholder="Place of Birth"
                        type="text"
                        onChange={(e) =>{
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
                <div>
                <Label for="DOB">
                        Date of Birth?
                    </Label>
                    <Input
                        id="DOB"
                        name="DOB"
                        placeholder="Date of Birth"
                        type="date"
                        onChange={(e) =>{
                            dispatch(update({
                                key: e.target.name,
                                value: e.target.value
                            }))
                        }}
                    />
                </div>
            </div>
        </div>
    )
}