import React from 'react';

const Card = ({ title, date, explanation, image }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{date}</h4>
      <img src={image} alt='star picture' />
      <p>{explanation}</p>
      <br />
    </div>
  );
};

export default Card;
