import React from 'react';
import SearchItem from '../SearchPanel';
import ItemList from '../ItemList';
import InputItem from '../InputItem';
import Footer from '../Footer';
import 'typeface-roboto';
import { Container } from '@material-ui/core';
import styles from './App.module.css';


const App = () => {
  const items = [
    {
      label: 'Drink 2 glasses of water',
      id: 1
    },
    {
      label: 'Have a breakfast',
      id: 2
    },
    {
      label: 'Drink coffee',
      id: 3
    }
  ];
  return (
        <Container maxWidth="sm" className={styles.container}>
            < SearchItem/>
            < ItemList items={items}/>
            < InputItem/>
            < Footer/>
        </Container>
  );
};

export default App;
