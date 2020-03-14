import React from 'react';
import classnames from 'classnames';
import styles from './TodoItem.module.css'
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
            <IconButton aria-label="delete" href="#">
                <DeleteIcon fontSize="large" />
            </IconButton>
        </div>
    )
};

export default TodoItem;