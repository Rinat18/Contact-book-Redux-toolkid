import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveChanges } from "../../store/contactSlice";
import { Link } from "react-router-dom";

const EditContact = () => {
  const oneContact = useSelector((state) => state.contacts.oneContact);

  const [contact, setContact] = useState(oneContact);

  const dispatch = useDispatch();

  return (
    <div>
      <h3>Edit contact component</h3>
      <input
        type="text"
        onChange={(e) => setContact({ ...contact, name: e.target.value })}
        value={contact.name}
      />
      <input
        type="number"
        onChange={(e) => setContact({ ...contact, number: e.target.value })}
        value={contact.number}
      />
      <Link to="/">
        <button onClick={() => dispatch(saveChanges(contact))}>Save</button>
      </Link>
    </div>
  );
};

export default EditContact;
