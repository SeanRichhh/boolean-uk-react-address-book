import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactsAdd({ setContacts, contacts }) {
  // setContacts and contacts must be passed as props
  // to this component so new contacts can be added to the
  // state

  //TODO: Implement controlled form
  //send POST to json server on form submit

  const formContact = {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    email: "",
    linkedIn:"",
    twitter: "",
  };

  const [newForm, setNewForm] = useState(formContact);

  function onSubmitForm(event) {
    event.preventDefault();
    fetch("http://localhost:4000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    })
      .then((res) => res.json(newForm))
      .then((data) => {
        setContacts([...contacts, data]);
        event.target.reset();
        setNewForm(formContact);
      });
  }

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  return (
    <form className="form-stack contact-form" onSubmit={onSubmitForm}>
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        required
        onChange={handleChange}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        required
        onChange={handleChange}
      />

      <label htmlFor="street">Street:</label>
      <input
        id="street"
        name="street"
        type="text"
        required
        onChange={handleChange}
      />

      <label htmlFor="city">City:</label>
      <input
        id="city"
        name="city"
        type="text"
        required
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        required
        onChange={handleChange}
      />
      
      <label htmlFor="linkedIn">LinkedIn:</label>
      <input
        id="linkedIn"
        name="linkedIn"
        type="text"
        required
        onChange={handleChange}
      />
      
      <label htmlFor="twitter">Twitter:</label>
      <input
        id="twitter"
        name="twitter"
        type="text"
        required
        onChange={handleChange}
      />

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}

export default ContactsAdd;
