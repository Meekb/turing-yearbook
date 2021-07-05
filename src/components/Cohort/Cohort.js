import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = ({staff}) => {
  const peopleCards = staff.map(person => {
    return (
      <div>
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
  return peopleCards;
}

export default Cohort;
