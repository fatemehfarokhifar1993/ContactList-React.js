import React from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
const App = () => {
  return (
    <main className="App">
      <h2>contact app</h2>
     <AddContact/>
     <ContactList/>
    </main>
  );
};

export default App;
