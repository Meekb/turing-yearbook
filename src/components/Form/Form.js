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
          value={this.state.name} 
          id='name' 
        />
        <input 
          aria-label='Quote Entry' 
          type='text' 
          placeholder='Quote...'
          value={this.state.quote} 
          id='quote' 
        />
        <input 
          aria-label='Superlative Entry' 
          type='text' 
          placeholder='Superlative...'
          value={this.state.superlative} 
          id='superlative' 
        />
        <button aria-label='Submit' className='submit-btn'>Submit</button>
      </div>
    );
  }

}

export default Form;