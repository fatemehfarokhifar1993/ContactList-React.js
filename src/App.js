import React, { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
const App = () => {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };
  const deleteContactHandler=(id)=>{
     const filteredContacts=contacts.filter((contact)=>contact.id !==id)
     setContacts(filteredContacts) 
  }
  return (
    <main className="App">
      <h2>contact app</h2>
      <div className="container">
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} onDelete={deleteContactHandler}/>
      </div>
    </main>
  );
};

export default App;
