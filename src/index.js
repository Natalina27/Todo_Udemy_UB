import React from 'react';
import ReactDom from 'react-dom';

const el = (
    <div>
        <h1> My To-Do List</h1>
        <input placeholder='search'/>
        <ul>
            <li>Learn react</li>
            <li>Build awesome app</li>
        </ul>
    </div>
);

ReactDom.render(el, document.getElementById('root'));