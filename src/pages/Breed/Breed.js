import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Breed.module.scss';
import API from '../../api/dog';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Breed = (props) => {
  const [loading, setLoadingState] = useState(true);
  const [breedImage, setBreedImage] = useState('');

  const breed = props.location.pathname.split('/')[2];
  const name = breed.split('-').join(' ');

  const fetchData = async () => {
    const imagesData = await API.getBreedImages(name.toLowerCase());
    const { message } = imagesData.data;

    setBreedImage(message[0]);
    setLoadingState(false);
  };

  useEffect(() => {
    if (loading) {
      fetchData();
    }
  }, [loading]);

  if (loading) {
    return (
      <div className={styles.container}>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to={`/`}>Back</Link>
      <div className={styles.name}>{name}</div>
      <img src={breedImage} alt={name} className={styles.image} />
    </div>
  );
};

export default Breed;
