import React from 'react';
import ReactDom from 'react-dom';

const TodoList = () => {
    const items = ['Drink coffee', 'Prepare risotto'];
    return(
        <ul>
            <li>{ items[0] }</li>
            <li>{ items[1] }</li>
        </ul>
    );
};

const AppHeader = () => {
    return  <h1> My To-Do List</h1>
};

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {fontSize: '20px'};
    return <input
        placeholder={searchText}
        style = {searchStyle}
            />
};

const App = () => {

        const value ='<script>alert("")</script>';

    return(
        <div>
            {value}
            <span>{(new Date()).toString()}</span>
            <AppHeader/>
            <SearchPanel/>
            <TodoList />
        </div>
    );
};


ReactDom.render(<App />, document.getElementById('root'));