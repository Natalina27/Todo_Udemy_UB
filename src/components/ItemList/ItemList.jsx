import React from 'react';
import Item from "../Item/Item";


const ItemList = ({items}) => {
    const elements = items.map((item) => {
        return (
            <li>
                < Item {...item}/>
            </li>
        );
    });

    return (
        <div>
            <h1> My To-Do List</h1>
            <ul>
                {elements}
            </ul>
        </div>
    )
};
export default ItemList;


