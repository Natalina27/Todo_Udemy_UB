import React from 'react';
import styles from './SearchPanel.module.css';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ItemStatusFilter from './ItemStatusFilter';

const SearchItem = () => {
  return (
        <div className={styles.search}>
        <Paper component="form" className={styles.root} >
            <IconButton type="submit" aria-label="search" href='#'>
                <SearchIcon />
            </IconButton>
            <InputBase
                placeholder=" Search "
                inputProps={{ 'aria-label': 'search ' }}/>
        </Paper>
        <ItemStatusFilter/>
        </div>

  );
};

export default SearchItem;