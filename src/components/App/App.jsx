import React from 'react';
import SearchItem from '../SearchPanel';
import ItemList from '../ItemList';
import InputItem from '../InputItem';
import Footer from '../Footer';
import 'typeface-roboto';
import { Container } from '@material-ui/core';
import styles from './App.module.css';


class App extends React.Component {
    idItem = 0;

    state = {
      items: [
        this.createTodoItem('Drink 2 glasses of water'),
        this.createTodoItem('Have a breakfast'),
        this.createTodoItem('Drink coffee')
      ]
    };

    createTodoItem(label) {
      return {
        label,
        isDone: false,
        isImportant: false,
        textColor: 'black',
        fontWeight: 400,
        id: this.idItem += 1
      };
    }

    onClickDelete = (id) => {
      this.setState(({ items }) => {
        const itemIndex = items.findIndex((el) => el.id === id);
        const newArray = [
          ...items.slice(0, itemIndex),
          ...items.slice(itemIndex + 1)
        ];

        return { items: newArray };
      });

      // another way:
      // const newItemList = this.state.items.filter(
      //   item => item.id !== id
      // );
      // this.setState({ items: newItemList });
    };

    onClickAdd = (text) => {
      const newItem = this.createTodoItem(text);

      this.setState(({ items }) => {
        const newArray = [
          ...items,
          newItem
        ];

        return { items: newArray };
      });
    };

    toggleProperty = (arr, id, stateItem, isImportant = false, fontWeight = 400) => {
      const itemIndex = arr.findIndex((el) => el.id === id);
      const oldItem = arr[itemIndex];
      const newItem = {
        ...oldItem,
        [stateItem]: !oldItem[stateItem],
        isImportant,
        fontWeight
      };
      return [
        ...arr.slice(0, itemIndex),
        newItem,
        ...arr.slice(itemIndex + 1)
      ];
    }

    onClickDone = (id) => {
      this.setState(({ items }) => {
        return {
          items: this.toggleProperty(items, id, 'isDone')
        };
      });
      // this.setState(({ items }) =>{
      //   const itemIndex = items.findIndex((el) => el.id === id);
      //   const oldItem = items[itemIndex];
      //   const newItem = {
      //     ...oldItem,
      //     isDone: !oldItem.isDone,
      //     isImportant: false,
      //     fontWeight: 400
      //   };
      //   const newArray = [
      //     ...items.slice(0, itemIndex),
      //     newItem,
      //     ...items.slice(itemIndex + 1)
      //   ];
      //   return {
      //     items: newArray
      //   };
      // });
      // another way:
      // const newItemList = this.state.items.map(item => {
      //   const newItem = { ...item };
      //   if (item.id === id) {
      //     newItem.isDone = !item.isDone;
      //     newItem.isImportant = false;
      //     newItem.fontWeight = 400;
      //   }
      //   return newItem;
      // });
      // this.setState({ items: newItemList });
    };

    onClickImportant = (id) => {
      const newItemList = this.state.items.map(item => {
        const newItem = { ...item };
        const newFontWeight = item.fontWeight === 400 ? 600 : 400;
        const newTextColor = item.textColor === 'black' ? 'red' : 'black';
        if (!item.isDone) {
          if (item.id === id) {
            newItem.isImportant = !item.isImportant;
            newItem.fontWeight = newFontWeight;
            newItem.textColor = newTextColor;
          }
        }
        return newItem;
      });
      this.setState({ items: newItemList });
    };

    render() {
      const { items } = this.state;
      const doneCount = items.filter((el) => el.isDone).length;
      const todoCount = items.length - doneCount;
      return (
            <Container maxWidth="sm" className={styles.container}>
                < SearchItem/>
                < ItemList
                    items={items}
                    onClickDelete={this.onClickDelete}
                    onClickDone={this.onClickDone}
                    onClickImportant={this.onClickImportant}
                />
                < InputItem onClickAdd={this.onClickAdd}/>
                < Footer toDo={todoCount} done={doneCount}/>
            </Container>
      );
    }
}

export default App;
