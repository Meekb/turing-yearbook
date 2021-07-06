import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
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
        <button aria-label='Submit' className='submit-btn'>Submit</button>
      </div>
    );
  }

}

export default Form;