import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Container from "./components/Container/Container";
import Phonebook from "./components/Phonebook/Phonebook";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";
import { getFromLocal, addSaveLocal } from "./utilits/localStorage";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount() {
    const addSaveContacts = addSaveLocal("contacts");
    if (addSaveContacts) {
      this.setState({ contacts: addSaveContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      getFromLocal("contacts", contacts);
    }
  }

  addContact = (name, number) => {
    if (this.onCheck(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const obj = { id: nanoid(), name, number };
    this.setState((prevState) => ({ contacts: [...prevState.contacts, obj] }));
  };

  onCheck = (value) => {
    return this.state.contacts.find(
      (el) => el.name.toUpperCase() === value.toUpperCase()
    );
  };

  deleteContacts = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el, index) => el.id !== id),
    }));
  };

  filterBtn = (value) => {
    this.setState({ filter: value });
  };

  filterContacts(value, arr) {
    const filterContactsMethod = value.filter((el) =>
      el.name.toUpperCase().includes(arr.toUpperCase())
    );
    return filterContactsMethod;
  }

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className="App">
        <Container title="Phonebook">
          <Phonebook onAddContact={this.addContact} />
        </Container>
        <Container title="Contacts">
          {contacts.length >= 2 && (
            <Filter filter={filter} onFilter={this.filterBtn} />
          )}
          <Contacts
            listContacts={this.filterContacts(contacts, filter)}
            onDelete={this.deleteContacts}
          />
        </Container>
      </div>
    );
  }
}

export default App;
