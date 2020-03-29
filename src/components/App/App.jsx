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
      ],
      count: 3
    };

    onClickDelete = (id) => {
      this.setState(({ items }) => {
        const itemIndex = items.findIndex((el) => el.id === id);
        const newItems = [...items.slice(0, itemIndex), ...items.slice(itemIndex + 1)];

        return { items: newItems };
      });
    };

    onClickAdd = (text) => {
      const newItem = {
        label: text,
        important: false,
        isDone: false,
        id: this.state.count + 1
      };

      this.setState(({ items, count }) => {
        const newArray = [
          ...items,
          newItem
        ];

        return { items: newArray, count: count + 1 };
      });
    };

    render() {
      return (
            <Container maxWidth="sm" className={styles.container}>
                < SearchItem/>
                < ItemList
                    items={this.state.items}
                    onClickDelete={this.onClickDelete}
                />
                < InputItem onClickAdd={this.onClickAdd}/>
                < Footer/>
            </Container>
      );
    }
}

export default App;
