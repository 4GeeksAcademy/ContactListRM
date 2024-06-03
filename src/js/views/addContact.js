import React, { useState, useContext } from "react";
import { Context } from "../store/appContext"
import { Link, useParams, useNavigate } from "react-router-dom";

export const AddContact = () => {
    const { actions } = useContext(Context)
    const params = useParams()
    const navigate = useNavigate()

    const [contact, setContact] = useState({
        "name": "",
        "phone": "",
        "email": "",
        "address": ""
    })


    const handleChange = (event) => {

        setContact({
            ...contact,
            [event.target.name]: event.target.value
        })

    }

    

    const saveContact = async (data) => {
        let response
        if(!params?.id){
             response = await actions.createContact(data)
        }else{
             response = await actions.updateContact(params.id, data)
        }
        
        if (response) {
            alert("Usuario guardado exitosamente")
            navigate("/")
        } else {
            alert("Error al guardar usuario")

        }
    }


    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5">Add a new contact</h1>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            name="name"
                            value={contact.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="email"
                            value={contact.email}
                            onChange={handleChange}

                        />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            type="phone"
                            className="form-control"
                            placeholder="Enter phone"
                            name="phone"
                            value={contact.phone}
                            onChange={handleChange}

                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter address"
                            name="address"
                            value={contact.address}
                            onChange={handleChange}

                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary form-control mt-3"
                        onClick={() => saveContact(contact)}
                    >
                        save
                    </button>
                    <Link className="mt-3 w-100 text-center" to="/">
                        or get back to contacts
                    </Link>
                </form>
            </div>
        </div>
    );
};


export default AddContact;