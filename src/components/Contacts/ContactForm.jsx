import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../store/contactSlice";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function createContact() {
    if (!contactName.trim() || !contactNumber.trim())
      return alert("Some inputs are empty!");

    let newContact = {
      id: Date.now(),
      name: contactName,
      number: contactNumber,
    };
    dispatch(addContact(newContact));
    setContactName("");
    setContactNumber("");
    navigate("/")
  }

  return (
    <div>
      <h3>Create Contact component</h3>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setContactName(e.target.value)}
        value={contactName}
      />
      <input
        type="number"
        placeholder="Enter number"
        onChange={(e) => setContactNumber(e.target.value)}
        value={contactNumber}
      />
      <button onClick={createContact}>Create</button>
    </div>
  );
};

export default ContactForm;
