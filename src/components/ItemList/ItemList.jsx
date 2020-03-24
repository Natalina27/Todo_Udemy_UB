import React from 'react';
import Item from "../Item/Item";
const ItemList = ({items}) => {
    return (
        <div>
            <h1> My To-Do List</h1>
            <ul>
                <li>< Item
                    label={items[0].label}
                    important={items[0].important}/></li>
                <li>< Item
                    label={items[1].label}
                    important={items[1].important}/></li>
                <li>< Item
                    label={items[2].label}
                    important={items[2].important}/></li>
            </ul>
        </div>
    )
};
export default ItemList;


