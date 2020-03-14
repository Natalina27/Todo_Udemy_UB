import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import styles from './App.module.css'
import Container from '@material-ui/core/Container';


const App = () => {
    const todoData = [
        {label:'Drink coffee', important: false, id: 1},
        {label:'Build app', important: true, id: 2},
        {label:'Have a lunch', important: false, id: 3}
    ];

    return(
        <Container maxWidth='sm' >
        <div className={styles.wrap}>
            <AppHeader />
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
        </Container>
    );
};

export default App;