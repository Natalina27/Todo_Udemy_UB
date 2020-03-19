import React from "react";
import TextField from '@material-ui/core/TextField';
import styles from './SearchPanel.module.css';
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

class SearchPanel extends React.Component{
    state = {
        term: ''
    };

    onSearchChange = (event) => {
        const term = event.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };


    render() {
        return (
            <div className={styles.search}>
                <TextField
                    label="Search"
                    type="search"
                    className={styles.searchField}
                    value={this.state.term}
                    onChange={this.onSearchChange}

                />
                <ItemStatusFilter/>
            </div>
        );
    }
}

export default SearchPanel;