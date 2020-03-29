import React from 'react';
import styles from './Item.module.css';
import {
  Box, Checkbox, IconButton, Button, ListItem, ListItemText, Typography
} from '@material-ui/core';
import { FavoriteBorder, Favorite, Delete as DeleteIcon } from '@material-ui/icons';
import classnames from 'classnames';


const Item = ({
  label, fontWeight, isDone, isImportant, onClickDelete, onClickDone, onClickImportant
}) => {
  return (
        <Box m={1} className={styles.box}>
            <div className={styles.box1}>
                <Checkbox
                    icon={<FavoriteBorder/>}
                    checkedIcon={<Favorite/>}
                    value="checked"
                    onClick={onClickDone}
                />
                <ListItem className={styles.box} component="li">
                    <ListItemText
                        primary={
                            <Typography
                                style={{ fontWeight }}
                                component={''}
                            >
                                {label}
                            </Typography>
                        }
                        className={classnames({
                          [styles.done]: isDone,
                          [styles.important]: isImportant
                        })}
                    />
                </ListItem>
            </div>
            <div className={styles.box2}>
                <IconButton
                    aria-label="delete"
                    href="#"
                    onClick={onClickDelete}
                >
                    <DeleteIcon fontSize="large"/>

                </IconButton>
                <div className={styles.importantBox}>
                    <Button
                        color="secondary"
                        href="#"
                        onClick={onClickImportant}
                    >!</Button>
                </div>
            </div>
        </Box>
  );
};


export default Item;
