import React from 'react';
import ReactDom from 'react-dom';

const TodoList = () => {
    return(
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    );
};

const AppHeader = () => {
    return  <h1> My To-Do List</h1>
};

const SearchPanel = () => {
    return <input placeholder="search"/>
};

const App = () => {
    return(
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};


ReactDom.render(<App />, document.getElementById('root'));