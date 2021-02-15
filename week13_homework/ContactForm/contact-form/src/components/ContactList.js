import React from 'react';
import ContactItem from './ContactItem';
import {ULHover} from './Styles';

const ContactList = ({contacts, onDelete}) =>{

    console.log(contacts);
    return (
        <ULHover>
        {contacts.map(contact =>{
            return<ContactItem key={contact.id} contact={contact} onDelete={onDelete}/>
        })}
        
        </ULHover>
    );

}

export default ContactList;
