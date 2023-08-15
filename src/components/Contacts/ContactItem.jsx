import React from "react";
import { useDispatch } from "react-redux";
// import { deleteContact, getOneContact } from "../store/contactSlice";

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  console.log(contact);

  return (
    <></>
    // <li>
    //   <p>
    //     {contact.name} <br />
    //     {contact.number}
    //   </p>
    //   <button onClick={() => dispatch(deleteContact(contact.id))}>
    //     Delete
    //   </button>
    //   <button onClick={() => dispatch(getOneContact(contact.id))}>Edit</button>
    // </li>
  );
};

export default ContactItem;
