import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = ({staff}) => {
  const peopleCards = staff.map(person => {
    return (
      <div>
        <h1>Staff</h1>
        <Person 
          photo={person.photo}
          name={person.name}
          quote={person.quote}
          superlative={person.superlative}
          id={person.id}
        />
      </div>
    );
  }); 

}

export default Cohort;
