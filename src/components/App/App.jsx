import React from "react";
import SearchItem from "../SearchPanel/SearchItem.jsx";
import ItemList from "../ItemList/ItemList.jsx";
import InputItem from "../InputItem/InputItem.jsx";
import Footer from "../Footer/Footer";
import 'typeface-roboto';
import {Container} from "@material-ui/core";


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
        <Container>
            < SearchItem/>
            < ItemList items={items}/>
            < InputItem/>
            < Footer />
        </Container>
    )
};

export default App;