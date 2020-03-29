import React from 'react';
import Item from './Item';
import styles from './ItemList.module.css';

const ItemList = ({
  items, onClickDelete, onClickDone, onClickImportant
}) => (<div>
        <h1 className={styles.title}> TO-DO LIST </h1>
        {items.map(
          (item) => <span key={item.id}>
                < Item
                    label={item.label}
                    isDone={item.isDone}
                    isImportant={item.isImportant}
                    textColor='black'
                    fontWeight={item.fontWeight}
                    id={item.id}
                    onClickDelete={() => onClickDelete(item.id)}
                    onClickDone={() => onClickDone(item.id)}
                    onClickImportant={() => onClickImportant}
                />
            </span>
        )}
    </div>);

export default ItemList;
