import React, { useState } from 'react';
 
export const ContactForm = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    ContactList.insert({
      firstName: text.trim(),
      lastName: text.trim(),
      createdAt: new Date()
    });

    setFirstname("");
    setLastname("");
  };
  return (
    <form className="task-form">
      <input
        type="text"
        placeholder="FirstName"
        value={firstName}
        onChange={(e) => setFirstname(e.target.value)}
      />
    <input
        type="text"
        placeholder="Lastname"
        value={lastName}
        onChange={(e) => setLastname(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};