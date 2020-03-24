import React from "react";
import SearchItem from "../SearchPanel/SearchItem.jsx";
import ItemList from "../ItemList/ItemList.jsx";
import InputItem from "../InputItem/InputItem.jsx";
import Footer from "../Footer/Footer";

const App = () => {

    return(
        <div>
            < SearchItem/>
            < ItemList/>
            < InputItem/>
            < Footer />
        </div>
    )
};

export default App;