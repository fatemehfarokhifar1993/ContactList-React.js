import "./ContactList.css";
import userImage from "../../images/user.png";
const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className="contactList">
      {contacts.map((contact) => {
        return (
          <div key={contact.id} className="item">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={userImage} alt="user" />
              <div>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
            </div>
            <button onClick={() => onDelete(contact.id)}>Delete</button>
          </div>
        );
      })}
    </section>
  );
};

export default ContactList;
