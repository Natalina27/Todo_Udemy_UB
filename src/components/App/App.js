import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";

const App = () => {
    const todoData = [
        {label:'Drink coffee', important: false},
        {label:'Build app', important: true},
        {label:'Have a lunch', important: false}
    ];

    return(
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;