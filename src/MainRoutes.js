import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactList from "./components/Contacts/ContactList";
import ContactForm from "./components/Contacts/ContactForm";
import EditContact from "./components/Contacts/EditContact";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactList />} />
      <Route path="/add" element={<ContactForm />} />
      <Route path="/edit" element={<EditContact />} />
    </Routes>
  );
};

export default MainRoutes;
