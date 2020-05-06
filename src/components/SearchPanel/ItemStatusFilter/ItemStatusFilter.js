import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import styles from './ItemStatusFilter.module.css';

const ItemStatusFilter = () => {
  return (
        <ButtonGroup
            variant="text"
            color="default"
            component="div">
            <Button className={styles.all} href="#">ALL</Button>
            <Button className={styles.active} href="#">ACTIVE</Button>
            <Button className={styles.done} href="#">DONE</Button>
        </ButtonGroup>
  );
};

export default ItemStatusFilter;
