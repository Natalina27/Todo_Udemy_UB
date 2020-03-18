import React from "react";
 import styles from './InputTask.module.css';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class InputTask extends React.Component{

    state = {
        label: ''
    };

    onLabelChange = (event) =>{
        this.setState(
            {
                label: event.target.value
            });
    };

    onSubmit =(event) => {
        event.preventDefault();
        this.props.onAdded(this.state.label);
    };


    render() {
        return (
            <form className={styles.newTask}
                 onSubmit={this.onSubmit}>

                <TextField
                    id="outlined-basic"
                    label="ADD NEW TASK HERE"
                    variant="outlined"
                    color="secondary"
                    className={styles.input}
                     onChange={this.onLabelChange}
                />
                <Fab
                    color="secondary"
                    aria-label="add"
                    href="#"
                   onClick={this.onSubmit}
                >

                    <AddIcon/>
                </Fab>
            </form>

        )
    }
}

export default InputTask;