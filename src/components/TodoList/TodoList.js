import React from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = () => {
    // const items = ['Drink coffee', 'Prepare risotto'];
    return(
        <ul>
            <li><TodoListItem  label='Drink coffee'/></li>
            <li><TodoListItem label='Prepare risotto' important /></li>
        </ul>
    );
};
export default TodoList;