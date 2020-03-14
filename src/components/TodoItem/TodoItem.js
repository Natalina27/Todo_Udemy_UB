import React from 'react';
import classnames from 'classnames';
import styles from './TodoItem.module.css'
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


const TodoItem = ({label, important = false}) => {
    return (
        <div>
        <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            value="checkedH" />
        <span
            className={ classnames ({
                [styles.item]:true,
                [styles.important]:important,
                [styles.label]: true,
                [styles.text]: true

        })}>{label}</span>

        <div>
            <IconButton aria-label="delete" href="#">
                <DeleteIcon fontSize="large" />
            </IconButton>
            <div className={styles.button}>
            <Button color="secondary" href="#"   >!</Button>
            </div>
            </div>
        </div>

    )
};

export default TodoItem;