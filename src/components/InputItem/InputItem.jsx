import React from "react";
import 'typeface-roboto';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import  grey  from '@material-ui/core/colors/grey';


const InputItem = () => {
    return (
        <form>
            <TextField
                className={styles.input}
                label="Add new task here"
                variant="outlined"
                id="custom-css-outlined-input"
                borderColor='grey'
            />
        </form>
    );
};

export default InputItem;