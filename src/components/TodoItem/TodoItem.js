import React from 'react';
import classnames from 'classnames';
import styles from './TodoItem.module.css'
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

class TodoItem extends React.Component{
    state ={
        done: false,
        important: false
    };
    onCheckboxClick = () => {
        this.setState({
            done: true
        })
    };

    onImportantClick = () => {
        this.setState({
            important: true
        })
    };

    render(){

        const {label} = this.props;
        const {done, important} = this.state;

        let classNames = classnames ({
            [styles.item]:true,
             [styles.important]:important,
            [styles.label]: true,
            [styles.text]: true,
            [styles.done]: done
        });
        return (
            <div>
                <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    value="checked"
                    onClick={this.onCheckboxClick}
                />
                <span
                    className={classNames }
                >
                {label}
                </span>

                <div>
                    <IconButton aria-label="delete" href="#">
                        <DeleteIcon fontSize="large" />
                    </IconButton>
                    <div className={styles.button}>
                        <Button
                            color="secondary"
                            href="#"
                            onClick={this.onImportantClick}
                        >!</Button>
                    </div>
                </div>
            </div>

        )
    }
}


export default TodoItem;