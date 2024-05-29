import React, {useContext} from "react";
import { useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/contactCard.css" 
import { useNavigate } from "react-router";

export const ContactCard = () => {

    const { store, actions } = useContext(Context);
    const [newContactInfo, setNewContactInfo] = useState({"agenda_slug": "Rosangel"})
    const navigate = useNavigate()

    const handleChange = e => {
        const { name, value } = e.target;
        setNewContactInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return(
        <div className="row p-5">
            <div className="col-12 d-flex justify-content-center">
                <h1>Update contact</h1>
            </div>
            <div className="col-12">
                <label for="full_name">Full name</label><br></br>
                <input type="text" className="newContactInput" placeholder="Full name" id="full_name" name="full_name" onChange={handleChange}></input>
            </div>
            <div className="col-12">
                <label for="email">Email</label><br></br>
                <input type="email" className="newContactInput" placeholder="Email" id="email" name="email" onChange={handleChange}></input>
            </div>
            <div className="col-12">
                <label for="phone">Phone</label><br></br>
                <input type="number" className="newContactInput" placeholder="Phone" id="phone" name="phone" onChange={handleChange}></input>
            </div>
            <div className="col-12">
                <label for="address">Address</label><br></br>
                <input type="text" className="newContactInput" placeholder="Address" id="address" name="address" onChange={handleChange}></input>
            </div>
            <div className="col-12">
                <button className="saveButton" onClick={() => {
                    actions.updateContact(store.updateContactID, newContactInfo);
                    navigate("/");
                    window.location.reload();
                }}>Save</button>
            </div>
            <a href="/">or get back to contacts</a>
        </div>
    )
}

