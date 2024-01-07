import { Component } from "react"
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './App.css';

import AddContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [{
      id: nanoid(6),
      name: 'Valerii',
      number: '+380 98 380 4 380'
    },
  ],
    filter: ''
  }

  handleAddContact = data => {
    const newContact = { id: nanoid(), ...data };
    this.state.contacts.some(({ name }) => {
      return name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase();
    })
      ? Notify.warning(`${newContact.name} is already in contacts`, {
          width: '360px',
          timeout: 5000,
          fontSize: '20px',
        })
      : this.setState(({ contacts }) => {
          return { contacts: [...contacts, newContact] };
        });
  };

  deleteContact = (id) => {
    this.setState(({contacts}) => {
      const newContact = contacts.filter(item => item.id !== id);

      return {
        contacts: newContact,
      }
    })
  }

  changeFilter = ({target}) => {
    console.log('target :>> ', target);
    this.setState({
      filter: target.value,
    })
  }

  getFilteredContact() {
    const {filter, contacts} = this.state;

    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(({name, number}) => { 
      const normalizedName = name.toLowerCase();
      const normalizedNumber = number.toLowerCase();

      return (normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter))
    })
    return filteredContacts;
  }
  
  render() {    
    const {handleAddContact} = this;
    const contacts = this.getFilteredContact();

    return (
    <section>
      <h1>Phonebook</h1>
      <AddContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onFilter={this.changeFilter} filter={this.state.filter}/>     
      <ContactList contacts={contacts} deleteContact={this.deleteContact} />
    </section>
  );}
};
