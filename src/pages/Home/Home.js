import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import API from '../../api/dog';
import ListItem from '../../components/ListItem/ListItem';

const Home = () => {
  const [loading, setLoadingState] = useState(true);
  const [breedList, setBreedList] = useState([]);

  const toTitleCase = (string) => {
    return string
      .split(' ')
      .map((w) => {
        return `${w.substring(0, 1).toUpperCase()}${w.substring(1, w.length)}`;
      })
      .join(' ');
  };

  const fetchData = async () => {
    const breedsData = await API.getBreeds();
    const { message } = breedsData.data;

    const breedArray = [];

    Object.keys(message).forEach((key) => {
      const titleCaseKey = toTitleCase(key);
      breedArray.push(titleCaseKey);
    });

    setBreedList(breedArray);
    setLoadingState(false);
  };

  useEffect(() => {
    if (loading) {
      fetchData();
    }
  }, [loading]);

  const renderBreeds = () => {
    return breedList.map((b) => {
      return <ListItem name={b} key={b} />;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>Select a breed below to a view a picture.</div>
      <div className={styles.breedList}>{renderBreeds()}</div>
    </div>
  );
};

export default Home;
