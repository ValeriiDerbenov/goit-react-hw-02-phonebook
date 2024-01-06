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
      name: 'Valerii',
      number: '+380 98 380 4 380'
    },
  ],
    filter: ''
  }

  handleAddContact = data => {
// console.log(data)
    const {name, number} = data;
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    const {contacts} = this.state;

    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      const normalizedCurrentNumber = item.number.toLowerCase();
      return (normalizedCurrentName === normalizedName && normalizedCurrentNumber === normalizedNumber);
    });
    if (dublicate) {
      return alert(`${name} ${number} is already in contacts` )
    }

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
      <AddContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onFilter={this.changeFilter} filter={this.state.filter}/>     
      <ContactList contacts={contacts} deleteContact={this.deleteContact} />
    </section>
      

  );}
};
