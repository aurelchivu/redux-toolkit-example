import React, { useState } from 'react';
import Card from './Card';
import { useGetPicturesQuery } from '../redux/services/nasaApi';

const HomePage = () => {
  const [numPictures, setNumPictures] = useState(10);
  const { data = [], isFetching } = useGetPicturesQuery(numPictures);
  const options = ['5', '10', '15', '20', '25'];

  return (
    <div>
      {isFetching ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h1>Pictures to show:</h1>
          <select
            className='selectNum'
            value={numPictures}
            onChange={(e) => setNumPictures(Number(e.target.value))}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {data?.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              date={item.date}
              explanation={item.explanation}
              image={item.url}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default HomePage;
