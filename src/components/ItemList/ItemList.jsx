import React from 'react';
import Item from "../Item/Item";


const ItemList = ({items}) => {

    const elements = items.map((item) => {

        const { id, ...itemProps} = item; // Rest parameter
        return (
            <li key={id}>
                < Item {...itemProps}/>
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


