import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ListItem.module.scss';

const ListItem = ({ name }) => {
  const slug = name.split(' ').join('-');
  return (
    <div className={styles.container}>
      <Link to={`/breeds/${slug}`}>{name}</Link>
    </div>
  );
};

export default ListItem;
