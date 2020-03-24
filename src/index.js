import React from 'react';
import ReactDom from 'react-dom';

const ItemList = () => {

    const items = ['Drink 2 glasses of water', 'Have a breakfast', 'Drink coffee'];

    return (
        <div>
            <h1> My To-Do List</h1>
            <ul>
                <li>{items[0]}</li>
                <li>{items[1]}</li>
                <li>{items[2]}</li>
            </ul>
        </div>
    )
};

const SearchItem = () => {
    const searchStyle = {
        fontSize: '25px'
    };
    const searchText = 'Type here to search';
    return <input
        placeholder={searchText}
        style={searchStyle}
    />;
};

const InputItem = () => {
    return <input placeholder='add new element'/>;
};

const App = () => {
    const isLoggedIn = false;
    const welcomeBox = <span>Welcome back !</span>;
    const loginBox = <span>Log in,  please</span>;


    const value = '<script > alert("")</script>';
    return(
        <div>
            {value}
            <span>{isLoggedIn ? welcomeBox : loginBox}</span>
            <br/>
            <span>{(new Date().toString())}</span>
            <br/>
            < SearchItem/>
            < ItemList/>
            < InputItem/>
        </div>
    )
};



ReactDom.render(<App/>, document.getElementById('root'));