import React from 'react';
import { Contact } from './Contact.jsx';
import { Info } from './Info.jsx';

const contacts = [
  {
    id: 1, 
    fullName: 'Mbulelo Pani',
    cellnumber: '123456789',
    email: 'mbulelo@email.com'

  },
  {
    id: 2, 
    fullName: 'John William',
    cellnumber: '555-465-5674',
    email: 'jwilliam@yahoo.com'

  },
  {
    id: 3, 
    fullName: 'James May',
    cellnumber: '023-123-777',
    email: 'jmay@topgear.com'

  },
];

export const App = () => (
  <div>
    <h1>Contacts</h1>
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact}/>
      ))}
    </ul>
  </div>
);
