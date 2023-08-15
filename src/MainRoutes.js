import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactList from "./components/Contacts/ContactList";
import ContactForm from "./components/Contacts/ContactForm";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactList />} />
      <Route path="/add" element={<ContactForm />} />
    </Routes>
  );
};

export default MainRoutes;
