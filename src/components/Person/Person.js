import React from 'react';
import './Person.css';

const Person = ({photo, name, quote, superlative}) => {
  return (
    <div>
      <img src={photo} />
      <p>{name}</p>
      <p>{quote}</p>
      <p>{superlative}</p> 
    </div>
  );
}

export default Person;
