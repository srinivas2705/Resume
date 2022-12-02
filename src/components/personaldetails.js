import React from "react";
import {Label, Input} from "reactstrap";
import "../styles/personaldetails.css";

export default function Personaldetails() {
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
                    />
                </div>
                <div></div>

                <div>
                <Label for="first name">
                        First Name
                    </Label>
                    <Input
                        id="fname"
                        name="first name"
                        placeholder="First Name"
                        type="text"
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
                        type="email"
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
                        type="number"
                    />
                </div>
            </div>
        </div>
    )
}