import React, { Component } from 'react';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import ContactForm from './Components/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('updated');
      localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('Contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  addContact = contact => {
    const doesExists = this.state.contacts.some(
      item => item.name === contact.name,
    );

    doesExists
      ? alert(`${contact.name} is already in contacts.`)
      : this.setState(prev => ({
          contacts: [...prev.contacts, contact],
        }));
  };

  handleFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  onClickRemove = e => {
    e.preventDefault();
    this.setState(prev => ({
      contacts: [...prev.contacts.filter(i => i.id !== e.target.id)],
    }));
  };

  render() {
    return (
      <>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.handleFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onClickRemove={this.onClickRemove}
        />
      </>
    );
  }
}

export default App;
