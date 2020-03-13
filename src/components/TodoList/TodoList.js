import React from 'react';
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({todos}) => {

    const elements = todos.map((item) => {

        const {id, ...itemProps} = item; //destructurization

        return <li key={item.id}><TodoItem {...itemProps}/></li>;
    });

    return(
        <ul>
            {elements}
        </ul>
    );
};
export default TodoList;