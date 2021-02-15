import React, {useState} from "react";
import {H1, Paper} from './components/Styles';
import {Button} from 'react-bootstrap';
import ContactList from './components/ContactList';
import initialContactData from './data/contacts';
import Form from './components/ContactForm';


const App = () => {

  const [contacts, setContacts] = useState(()=>initialContactData); //pass in cll back cause we are passing in variable
  const [addContact, setAddContact] = useState(false);

    const handleAddContact = (newContact) =>{

      let newContactList = [newContact, ...contacts];
      setContacts(newContactList);
      setAddContact(false);

    }

    const handleDeleteContact = (id) =>{

      let oldContacts = [...contacts];

      let filteredContacts = oldContacts.filter(contact =>{
        return id !== contact.id
      })

      setContacts(filteredContacts);
    }




  return <>

  <div className="row">
    <div className="col-6 offset-3 py-5">
      <H1>Contact List</H1>

      <Paper width="100%" height="auto">

        {addContact 
        ? 
        <Form onAdd={handleAddContact}/>
        :
        <Button variant="dark" onClick={()=>setAddContact(true)}>Add Contact</Button>
        }
      
      </Paper>

    </div>
  </div>

  <div className="row">
    <div className="col-6 offset-3">
    <ContactList contacts={contacts} onDelete={handleDeleteContact}/>
    </div>
  </div> 



  
  </>;
};

export default App;
