import { useState } from 'react';
import './App.css';
import { useGetPicturesQuery } from './redux/services/nasaApi';

function App() {
  const { data, isFetching } = useGetPicturesQuery();

  console.log(data);

  return <div className='App'></div>;
}

export default App;
