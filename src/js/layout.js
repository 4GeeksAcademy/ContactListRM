import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Contact } from "./views/contact";
import {AddContact} from "./views/addContact";
import {Demo} from "./views/demo";
import injectContext from "./store/appContext";
import { Single } from "./views/single";
import {ContactCard} from "./component/contactCard";

const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
					<Route path="/" element={<Contact />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/add" element={<AddContact />} />
						<Route path="/contacts" element={<Contact />} />
						<Route path="/edit/:id" element={<AddContact />} />
						<Route path="/card" element={<ContactCard />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
