import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import styles from './TodoList.module.css'

const TodoList = ({todos, onDeleted}) => {

    const elements = todos.map((item) => {

        const {id, ...itemProps} = item; //destructurization

        return(
            <li key={item.id}>
                <TodoItem
                    {...itemProps}
                     onDeleted={()=>onDeleted(id)
                }
                />
            </li>
        ) ;
    });

    return(
        <ul className={styles.list}>
            {elements}
        </ul>

    );
};
export default TodoList;