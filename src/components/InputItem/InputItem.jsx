import React from "react";
import 'typeface-roboto';
import TextField from '@material-ui/core/TextField';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'pink',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#f48fb1',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'grey',
            },
            '&:hover fieldset': {
                borderColor: '#e91e63',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#f48fb1',
            },
        },
    },
})(TextField);

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));




const InputItem = () => {
    const classes = useStyles();
    return (
        <form className={styles.input}>
            <CssTextField
                fullWidth
                className={classes.margin}
                label="Add new task here"
                variant="outlined"
                id="custom-css-outlined-input"
            />
                <Button
                    color="secondary"
                    href="#"
                    className={styles.add}

                >ADD</Button>
        </form>
    );
};

export default InputItem;