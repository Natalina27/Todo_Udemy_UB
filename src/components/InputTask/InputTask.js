import React from "react";
 import styles from './InputTask.module.css';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const InputTask = () =>{
    return (
        <div className={styles.newTask}>
            <TextField
                id="outlined-basic"
                label="ADD NEW TASK HERE"
                variant="outlined"
                color="secondary"
               fullWidth={true}
            />
            <Fab
                color="secondary"
                aria-label="add"
                href="#">

                <AddIcon />
            </Fab>
        </div>

    )
};

export default InputTask;