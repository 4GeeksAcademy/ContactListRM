const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            urlBase: "https://playground.4geeks.com/contact",
            contacts: []
        },
        actions: {
createAgenda: async () => {
                const store = getStore();
                try {
                    const response = await fetch(`${store.urlBase}/agendas`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ name: "Rosangel" })
                    });
                    const responseData = await response.json();

                    if (response.status === 201) {
                        console.log("Agenda creada", responseData);
                    } else if (response.status === 400) {
                        console.log("La agenda ya existe o hay un error en la solicitud", responseData);
                    } else {
                        console.log("Error desconocido al crear la agenda", responseData);
                    }
                } catch (error) {
                    console.log("Error de red o del servidor: ", error);
                }
            },
            createContact: async (contactData) => {
                const store = getStore();
                try {
                    const response = await fetch(`${store.urlBase}/agendas/Rosangel/contacts`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(contactData),
                    });

                    if (response.ok) {
                        getActions().getAllContacts();
                        return true;
                    }

                } catch (error) {
                    console.error("Error creating contact:", error);
                }
            },
			getAllContacts: async () => {
                const store = getStore();
                try {
                    let response = await fetch(`${store.urlBase}/agendas/Rosangel/contacts`);
                    if (response.status === 404) {
                        getActions().createAgenda();
                    } else {
                        let data = await response.json();
                        console.log(data);
                        setStore({
                            contacts: data.contacts
                        });
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            deleteContact: async (contactId) => {
                const store = getStore();
                try {
                    const response = await fetch(`${store.urlBase}/agendas/Rosangel/contacts/${contactId}`, {
                        method: "DELETE",
                    });
                    if (response.ok) {
                        // Eliminar el contacto del estado local
                        const updatedContacts = store.contacts.filter(contact => contact.id !== contactId);
                        setStore({ contacts: updatedContacts });
                    } else {
                        console.error("Error deleting contact:", response.status);
                    }
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            },
			setUpdateId: (newID) => {
				setStore({updateContactID: newID})
			},
            updateContact: async (contactId, contactData) => {
                try {
                    const response = await fetch(`${store.urlBase}/agendas/Rosangel/contacts/${contactId}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(contactData),
                    });
                    if (response.ok) {
                        getActions().getAllContacts();
                    } else {
                        console.error("Error updating contact:", response.status);
                    }
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({ demo: demo });
            }
        }
    };
};

export default getState;
