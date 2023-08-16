import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact, getOneContact } from "../../store/contactSlice";
import { Link } from "react-router-dom";

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  //   console.log(contact);

  return (
    // <></>
    <li className="Item">
      <p>
        Name: {contact.name} <br />
        Number: {contact.number}
      </p>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
      <Link to="/edit">
        <button onClick={() => dispatch(getOneContact(contact.id))}>
          Edit
        </button>
      </Link>
    </li>
  );
};

export default ContactItem;
