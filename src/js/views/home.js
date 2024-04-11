import React, { useContext, useEffect } from "react";
import { contactCard } from "../component/contactCard";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(() => {
	//	actions.getContacts()
	}, []);



	return (
		<>
			<div className="container">
				<Link to="/demo">
					<button type="button" className="Button btn btn-success">Add a new contact</button>
				</Link>
				{store.contacts?.map((contact, index) => {
					return (
						<>
							<contactCard
								id={contact.id}
								key={index}
								full_name={contact.full_name}
								address={contact.address}
								phone={contact.phone}
								email={contact.email}
							/>


						</>

					)

				})}
			</div>
		</>
	)
}
