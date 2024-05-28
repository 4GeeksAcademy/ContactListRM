import React, { useContext } from "react";
import "../../styles/contactCard.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ContactCard = ({ id, full_name, address, phone, email }) => {
    const { actions } = useContext(Context);

    const handleDel = async () => {
        await actions.deleteContact(contact.id);
        await actions.getContacts();
        // No es recomendable recargar la página aquí
        // window.location.reload();
    };

        return (
        <div className="row border border-1 border-secondary mt-2 mx-auto w-75 col-12">
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-3 col-xl-3">
                <img className=" w-100  img" src="https://st4.depositphotos.com/8230070/22279/v/450/depositphotos_222797394-stock-illustration-face-expression-beautiful-woman-dark.jpg" alt="Contact" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-8 col-xl-8 pt-4">
                <h5 className="pt-2">{full_name} </h5>
                <div className="Location d-flex">
                    <i className="fa-solid fa-location-dot pt-2"></i><p className="px-2 pt-2">{address}</p>
                </div>
                <div className="Phone d-flex">
                    <i className="fa-sharp fa-solid fa-phone pt-2"></i><p className="px-2 pt-2">{phone}</p>
                </div>
                <div className="Email d-flex">
                    <i className="fa-solid fa-envelope pt-2"></i><p className="px-2 pt-2">
                        {email}</p>
                </div>
            </div>

            <div className=" col-md-2 col-lg-1 col-xl-1   pt-4 d-flex ">
                <Link className="mx-1" to={`/update/${id}`}>
                    <i className="fa-solid fa-pen"></i>
                </Link>
                <i className="fa-solid fa-trash pe-3 " onClick={handleDel}></i>
            </div>
        </div>
    );
};