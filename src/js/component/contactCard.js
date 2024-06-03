import React from "react";
import PropTypes from "prop-types";
import Boo from "../../img/Boo.jpg";

export const ContactCard = ({ contact, onDelete, onUpdate }) => {
    return (
        <li className="list-group-item">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0">
                    <img src={Boo} alt={contact.name} className="rounded-circle mx-auto d-block img-fluid" />
                </div>
                <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                    <button className="btn" onClick={onDelete}>
                        <i className="fas fa-trash-alt" />
                    </button>
                    <button className="btn" onClick={onUpdate}>
                        <i className="fas fa-edit ms-2"  />
                    </button>
                    <label className="name lead">{contact.name}</label>
                    <br />
                    <i className="fas fa-map-marker-alt text-muted mr-3" />
                    <span className="text-muted">{contact.address}</span>
                    <br />
                    <span className="fa fa-phone fa-fw text-muted mr-3" />
                    <span className="text-muted small">{contact.phone}</span>
                    <br />
                    <span className="fa fa-envelope fa-fw text-muted mr-3" />
                    <span className="text-muted small text-truncate">{contact.email}</span>
                </div>
            </div>
        </li>
    );
};


