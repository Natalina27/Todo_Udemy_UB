import React from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = () => {
    // const items = ['Drink coffee', 'Prepare risotto'];
    return(
        <ul>
            <li><TodoListItem /></li>
            <li><TodoListItem /></li>
        </ul>
    );
};
export default TodoList;