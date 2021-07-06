import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className='form-area'>
        <h2>Add A Student</h2>
        <label for='name'>
          <input type='text' placeholder='Name...' id='name' />
        </label>
        <label for='quote'>
          <input type='text' placeholder='Quote...' id='quote' />
        </label>
        <label for='superlative'>
          <input type='text' placeholder='Superlative...' id='superlative' />
        </label>
        <button className='submit-btn'>Submit</button>
      </div>
    );
  }

}

export default Form;