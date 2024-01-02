import { Component } from "react"


import AddContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }
  
  render()
  {return (
    <section>
      <h1>Phonebook</h1>
      <AddContactForm onAddContact={this.handleAddContact} />
      <h2>Contacts</h2>
      <Filter onFilter={this.handleFilter} filter={this.state.filter} />
    </section>
      

  );}
};
