import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor({addPerson}) {
    super();
    this.state = {
      name: '',
      quote: '',
      superlative: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitNewPerson = event => {
    event.preventDefault();
    const newStudent = {
      id: Date.now(),
      photo: 'https://placekitten.com/200/300',
      ...this.state
    }
    this.props.addPerson(newStudent);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState( { name: '', quote: '', superlative: ''});
  }

  render() {
    return (
      <div className='form-area'>
        <h2>Add A Student</h2>
        <input 
          aria-label='Name Entry' 
          type='text' 
          placeholder='Name...'
          name='name'
          value={this.state.name} 
          id='name'
          onChange={event => this.handleChange(event)} 
        />
        <input 
          aria-label='Quote Entry' 
          type='text' 
          placeholder='Quote...'
          name='quote'
          value={this.state.quote} 
          id='quote'
          onChange={event => {this.handleChange(event)}} 
        />
        <input 
          aria-label='Superlative Entry' 
          type='text' 
          placeholder='Superlative...'
          name='superlative'
          value={this.state.superlative} 
          id='superlative'
          onChange={event => {this.handleChange(event)}} 
        />
        <button aria-label='Submit' className='submit-btn' onClick={event => this.submitNewPerson(event)}>Submit</button>
      </div>
    );
  }

}

export default Form;