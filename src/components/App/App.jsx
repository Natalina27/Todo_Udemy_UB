import React from 'react';
import SearchItem from '../SearchPanel';
import ItemList from '../ItemList';
import InputItem from '../InputItem';
import Footer from '../Footer';
import 'typeface-roboto';
import { Container } from '@material-ui/core';
import styles from './App.module.css';


class App extends React.Component {
    state = {
      items: [
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
      ]
    };

    onclickDelete = (id) => {
      console.log('Deleted', id);
    };

    render() {
      return (
            <Container maxWidth="sm" className={styles.container}>
                < SearchItem/>
                < ItemList
                    items={this.state.items}
                    onClickDelete={this.onclickDelete}
                />
                < InputItem/>
                < Footer/>
            </Container>
      );
    }
}

export default App;
