import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import styles from './App.module.css'

const App = () => {
    const todoData = [
        {label:'Drink coffee', important: false, id: 1},
        {label:'Build app', important: true, id: 2},
        {label:'Have a lunch', important: false, id: 3}
    ];

    return(
        <div className={styles.wrap}>
            <AppHeader />
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;