import React, { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
const App = () => {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };
  return (
    <main className="App">
      <h2>contact app</h2>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList />
    </main>
  );
};

export default App;
