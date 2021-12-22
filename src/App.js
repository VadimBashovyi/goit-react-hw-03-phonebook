import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import Container from './components/Container/Container'
import Phonebook from './components/Phonebook/Phonebook'
import Contacts from './components/Contacts/Contacts'
import Filter from './components/Filter/Filter'
import { getFromLocal, addSaveLocal } from './utilits/localStorage'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
  componentDidMount() {
    const addSaveContacts = addSaveLocal('contacts')
    if (addSaveContacts) {
      this.setState({ contacts: addSaveContacts })
    }
  }
  componentDidUpdate(prevProps, oldState) {
    const { contacts } = this.state
    if (contacts !== oldState.contacts) {
      getFromLocal('contacts', contacts)
    }
  }

  addContact = (name, number) => {
    if (this.onCheck(name)) {
      alert(`${name} is already in contacts`)
      return
    }
    const obj = { id: uuidv4(), name, number }
    this.setState((oldState) => ({ contacts: [...oldState.contacts, obj] }))
  }

  onCheck = (value) => {
    return this.state.contacts.find(
      (el) => el.name.toUpperCase() === value.toUpperCase(),
    )
  }

  deleteContacts = (id) => {
    this.setState((oldState) => ({
      contacts: oldState.contacts.filter((el, index) => el.id !== id),
    }))
  }

  filterBtn = (value) => {
    this.setState({ filter: value })
  }

  filterContacts(value, arr) {
    const filterContactsMethod = value
      .filter((contact) => contact.name.toLowerCase().includes(arr))
      .sort((a, b) => a.name.localeCompare(b.name))
    return filterContactsMethod
  }

  render() {
    const { contacts, filter } = this.state
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
    )
  }
}

export default App
