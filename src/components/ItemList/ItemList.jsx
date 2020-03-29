import React from 'react';
import Item from './Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDelete }) => {
  const elements = items.map((item) => {
    const { id, ...itemProps } = item; // Rest parameter
    return (
            <span key={id}>< Item
                {...itemProps}
                onClickDelete = {() => onClickDelete(id)}
            /></span>
    );
  });

  return (
        <div>
            <h1 className={styles.title}> TODO LIST </h1>
            {elements}
        </div>
  );
};
export default ItemList;
