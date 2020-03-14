import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import styles from './SearchPanel.module.css';

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

            <ButtonGroup
                variant="text"
                color= "default"
             component="div">
                <Button href="#">ALL</Button>
                <Button href="#">ACTIVE</Button>
                <Button href="#">DONE</Button>
            </ButtonGroup>
        </div>
    );
};

export default SearchPanel;