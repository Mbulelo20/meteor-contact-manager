import { Meteor } from 'meteor/meteor';
import { ContactList } from '/imports/api/ContactList';

const insertTask = (name) => ContactList.insert({ name: name });
 
Meteor.startup(() => {
  if (ContactList.find().count() === 0) {
    [
      'lights',
      'Richard Hammond',
      'Jeremy Clarkson',
      'James Bond',
      'Michael Owens',
      
    ].forEach(insertTask)
  }
});