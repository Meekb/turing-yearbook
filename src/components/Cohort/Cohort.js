import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = ({ staff, students }) => {
  const staffCards = staff.map(instructor => {
    return (
      <div>
        <Person 
          photo={instructor.photo}
          name={instructor.name}
          quote={instructor.quote}
          superlative={instructor.superlative}
          id={instructor.id}
          key={instructor.id}
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
          key={student.id}
        />
      </div>
    );
  }); 

  return (
    <div>
      <h2>Staff</h2>
      {staffCards}
      <h2>Students</h2>
      {studentCards}
    </div>
  );

};

export default Cohort;
