import React from "react";
import TextField from '@material-ui/core/TextField';
import styles from './SearchPanel.module.css';
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

const SearchPanel = () => {
    return(
        <div className={styles.search}>
        <TextField
            id="standard-search"
            label="Search"
            type="search"
            aria-label="search"
            className={styles.searchField}
            inputProps={{ 'aria-label': 'search google maps' }}

        />
        <ItemStatusFilter/>
        </div>
    );
};

export default SearchPanel;