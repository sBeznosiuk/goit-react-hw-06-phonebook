import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyledForm } from './styles';
import PropTypes from 'prop-types'; // ES6
class Form extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
    id: '',
  };

  onHandleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value, id: uuidv4() });
  };

  onHandleSubmit = e => {
    e.preventDefault();

    const refs = {
      name: document.getElementById('name-input'),
      tel: document.getElementById('tel-input'),
    };

    this.props.addContact(this.state);

    refs.name.value = '';
    refs.tel.value = '';
  };

  render() {
    return (
      <StyledForm action="submit" onSubmit={this.onHandleSubmit}>
        <label htmlFor="name">
          <strong>Name:</strong>
          <input
            id="name-input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="text only"
            onChange={this.onHandleChange}
            required
          />
        </label>
        <label htmlFor="number">
          <strong>Number:</strong>
          <input
            id="tel-input"
            type="tel"
            name="number"
            pattern="^[ 0-9]+$"
            onChange={this.onHandleChange}
            placeholder="numbers only"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </StyledForm>
    );
  }
}

export default Form;
