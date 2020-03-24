import React from 'react';
import Item from "../Item/Item";
const ItemList = () => {

    const items = [
        'Drink 2 glasses of water',
        'Have a breakfast',
        'Drink coffee'
    ];

    return (
        <div>
            <h1> My To-Do List</h1>
            <ul>
                <li>< Item /></li>
                <li>< Item /></li>
                <li>< Item /></li>
            </ul>
        </div>
    )
};
export default ItemList;


