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
        <label>
          <input type='text' />
        </label>
        <label>
          <input type='text' />
        </label>
      </div>
    );
  }

}

export default Form;