import React from 'react';
import Card from './Card';
import { useGetPicturesQuery } from '../redux/services/nasaApi';

const HomePage = () => {
  const { data, isFetching } = useGetPicturesQuery();

  console.log(data);
  return (
    <div>
      {isFetching ? <h1>Loading...</h1> : data?.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          date={item.date}
          explanation={item.explanation}
          image={item.url}
        />
      ))}
    </div>
  );
};

export default HomePage;
