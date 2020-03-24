import React from 'react';
import ReactDom from 'react-dom';

const ItemList = () => {
    return (
        <div>
            <h1> My To-Do List</h1>
            <ul>
                <li>Learn react</li>
                <li>Build awesome app</li>
            </ul>
        </div>
    )
};

const SearchItem = () => {
    return <input placeholder='search'/>;
};

const InputItem = () => {
    return <input placeholder='add new element'/>;
};

const App = () => {
    return(
        <div>
            <SearchItem/>
            < ItemList/>
            <InputItem/>
        </div>
    )
};



ReactDom.render(<App/>, document.getElementById('root'));