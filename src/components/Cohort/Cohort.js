import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = ({ staff, students }) => {
  const peopleCards = staff.map(instructor => {
    return (
      <div>
        <Person 
          photo={instrcutor.photo}
          name={instrcutor.name}
          quote={instrcutor.quote}
          superlative={instrcutor.superlative}
          id={instrcutor.id}
          key={instrcutor.id}
        />
      </div>
    );
  });
  
  const studentCards = students.map(student => {
    return (
      <div>
        <Person 
          photo={student.photo}
          name={student.name}
          quote={student.quote}
          superlative={student.superlative}
          id={student.id}
        />
      </div>
    );
  }); 

  return peopleCards;
}

export default Cohort;
