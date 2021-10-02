import React from 'react';

const Card = ({ title, date, explanation, image }) => {
  return (
    <div className='card'>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <img src={image} alt='star picture' />
      <p>{explanation}</p>
      <br />
    </div>
  );
};

export default Card;
