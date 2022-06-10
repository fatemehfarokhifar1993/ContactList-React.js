import React, { useEffect, useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
const App = () => {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };
  const deleteContactHandler = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) setContacts(savedContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <main className="App">
      <header>contact app</header>
      <div className="container">
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} onDelete={deleteContactHandler} />
      </div>
    </main>
  );
};

export default App;
