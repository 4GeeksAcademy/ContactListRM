import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"
import "../../styles/contact.css";


export const Contact = () => {
  const { actions } = useContext(Context)

  const handleSubmit = async (event) => {
    event.preventDefault();

    const inputData = Object.fromEntries(new FormData(event.target));
    console.log(Object.fromEntries(new FormData(event.target)))
    actions.createContact(inputData);
    console.log(inputData)
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h1 className="text-center">Add a New Contact</h1>
            <label for="exampleInputEmail1" className="form-label">Full name</label>
            <input name= "full_name" type="name" className="form-control" placeholder="Full name" id="exampleInputName" aria-describedby="NamelHelp" />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail" className="form-label">Email</label>
            <input name="email" type="email" className="form-control" placeholder="Email" id="exampleInputEmail" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPhone" className="form-label">Phone</label>
            <input name="phone" type="phone" className="form-control" placeholder="Phone" id="exampleInputPhone" />
          </div>
          <div className="mb-3">
            <label for="address" className="form-label">Address</label>
            <input name="address" type="address" className="form-control" placeholder="Address" id="exampleInputAddress" />
          </div>
          <div className="form-group form-button">
            <input type="submit" className="form-submit" value="Save" />
          </div>
            <Link to="/">
              <a href="#" className="text-decoration-none">or get back to contacts</a>
            </Link>
        </form>
      </div>
    </>
  )


};
