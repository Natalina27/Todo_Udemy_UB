import React from 'react';
import ReactDom from 'react-dom';

const el =(
    <div>
    <h1> My To-Do List</h1>
        <input  placeholder="search" />
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    </div>
) ;
    console.log(el);


ReactDom.render(el, document.getElementById('root'));