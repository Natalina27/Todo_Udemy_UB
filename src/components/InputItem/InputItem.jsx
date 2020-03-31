import React from 'react';
import 'typeface-roboto';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'pink'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#f48fb1'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey'
      },
      '&:hover fieldset': {
        borderColor: '#e91e63'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f48fb1'
      }
    }
  }
})(TextField);


class InputItem extends React.Component {
  state = {
    label: ''
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onClickAdd(this.state.label);
  };

  render() {
    return (
        <form
            className={styles.input}
            onSubmit={this.onSubmit}
        >
          <CssTextField
              fullWidth
              label="Add new task here"
              variant="outlined"
              id="custom-css-outlined-input"
              onChange={this.onLabelChange}
          />
          <Button
              color="secondary"
              href="#"
              className={styles.add}
               onClick={this.onSubmit}

          >ADD</Button>
        </form>
    );
  }
}


export default InputItem;