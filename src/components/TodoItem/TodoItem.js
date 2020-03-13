import React from 'react';
import classnames from 'classnames';
import styles from './TodoItem.module.css'

const TodoItem = ({label, important = false}) => {

    // const style = {
    //     color: important ? 'tomato' : 'black'
    // };
    return <span
        className={ classnames ({
            [styles.item]:true,
            [styles.important]:important

    })}>{label}</span>
};

export default TodoItem;