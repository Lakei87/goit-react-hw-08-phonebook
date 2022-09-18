import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';


class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addContact = data => {
    // const { contacts } = this.state;
    const { name, number } = data;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  handleFilterChange = e => {
    const { value } = e.currentTarget;

    this.setState({
      filter: value,
    });
  };

  filtersContactList = () => {
    const { contacts, filter } = this.state;
    const valueInLowerCase = filter.toLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(valueInLowerCase));
  }

  render() {
    const { filter } = this.state;
    const { addContact, handleFilterChange } = this;
    const filteredContacts = this.filtersContactList();

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >

        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter onChange={handleFilterChange} value={filter} />
        <ContactList contacts={filteredContacts} />
  
      </div>
    );   
  }
};

export default App;