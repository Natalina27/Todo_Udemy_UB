import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoListItem from "../TodoList/TodoList";

const App = () => {

    return(
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoListItem />
        </div>
    );
};

export default App;