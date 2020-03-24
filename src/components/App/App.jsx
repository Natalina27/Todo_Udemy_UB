import React from "react";
import SearchItem from "../SearchPanel/SearchItem.jsx";
import ItemList from "../ItemList/ItemList.jsx";
import InputItem from "../InputItem/InputItem.jsx";
import Footer from "../Footer/Footer";

const App = () => {


    const items = [
        {
            label: 'Drink 2 glasses of water',
            important: true,
            id: 1
        },
        {
            label:'Have a breakfast',
            important: false,
            id: 2
        },
        {
            label:'Drink coffee',
            important: false,
            id: 3
        }
    ];

    return(
        <div>
            < SearchItem/>
            < ItemList items={items}/>
            < InputItem/>
            < Footer />
        </div>
    )
};

export default App;