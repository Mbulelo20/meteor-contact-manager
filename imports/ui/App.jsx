import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ContactList } from '/imports/api/ContactList';
import { Contact } from './Contact';
import {ContactForm} from './ContactForm'

export const App = () => {
  const contact = useTracker(() => ContactList.find({}, { sort: { createdAt: -1 } }).fetch());
 
  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <ContactForm />
      <ul>
        { contact.map(contact => <Contact key={ contact._id } contact={ contact }/>) }
      </ul>
    </div>
  );
};