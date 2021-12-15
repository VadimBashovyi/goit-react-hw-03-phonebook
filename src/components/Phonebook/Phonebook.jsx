import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Phonebook.module.css";

class Phonebook extends Component {
  state = {
    name: "",
    number: "",
  };

  valueInput = (e) => {
    const {name, value} = e.currentTarget
    this.setState({
      [name]: value,
    });
  };

  valueSubmit = (e) => {
    const { name, number }= this.state
    e.preventDefault();
    this.props.onAddContact(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={styles.mainForm} onSubmit={this.valueSubmit}>
          <label htmlFor="name" className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              className={styles.input}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={name}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.valueInput}
            />
          </label>
          <label htmlFor="name" className={styles.label}>
            Phone
            <input
              type="tel"
              name="number"
              className={styles.input}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              value={number}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.valueInput}
            />
          </label>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

Phonebook.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default Phonebook;
