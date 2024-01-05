import { Component } from "react"
import './App.css';

import AddContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [{
      id: nanoid(6),
      name: 'Val',
      number: '+380 98 380 4 380',
    }],
    filter: ''
  }

  handleAddContact = data => {
// console.log(data)
    this.setState(({contacts}) => {
      const newContact = {
        id: nanoid(6),
        ...data,
      }
      return {
        contacts: [...contacts, newContact]
      }
    })
  }
  
  render() { 
    const {contacts} = this.state;
    const {handleAddContact} = this;
    return (
    <section>
      <h1>Phonebook</h1>
      <AddContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onFilter={this.handleFilter} filter={this.state.filter} />
      <ContactList contacts={contacts} />
    </section>
      

  );}
};
