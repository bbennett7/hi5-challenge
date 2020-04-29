import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import API from '../../api/dog';

const Home = () => {
  const [loading, setLoadingState] = useState(true);
  const [breedList, setBreedList] = useState([]);

  const fetchData = async () => {
    const breedsData = await API.getBreeds();
    const { data } = breedsData;
    setBreedList(data.message);

    setLoadingState(false);
  };

  useEffect(() => {
    if (loading) {
      fetchData();
    }
  }, [loading]);

  return <div className={styles.container}></div>;
};

export default Home;
