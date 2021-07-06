import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import Form from '../Form/Form';
import people from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addPerson = (newPerson) => {
    this.setState( { staff: [...this.state.staff], students: [...this.state.students]) // need logic newPerson is staff ? add to staff : add to students....here or Form submitPerson method?
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
        <Form addPerson={this.addPerson} />
        <Cohort staff={this.state.staff} students={this.state.students}/>
      </div>
    );
  }
}

export default App;
