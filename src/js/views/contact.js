import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import {ContactCard} from "../component/contactCard";
import "../../styles/contact.css";


export const Contact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    return (
        <div className="container">
            <div>
                <p className="text-right my-3">
                    <Link className="btn btn-success" to="/add">
                        Add new contact
                    </Link>
                </p>
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <ul className="list-group pull-down" id="contact-list">
                        {store.contacts.map(contact => (
                            <ContactCard key={contact.id} contact={contact} onDelete={() => actions.deleteContact(contact.id)} onUpdate={() => navigate(`/edit/${contact.id}`)} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Contact;