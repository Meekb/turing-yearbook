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