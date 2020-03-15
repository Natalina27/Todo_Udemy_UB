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
        done: false
    };
    onLabelClick = () => {
        this.setState({
            done: true
        })
    };

    render(){

        const {label, important = false} = this.props;
        const {done} = this.state;
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
                    value="checked" />
                <span
                    className={classNames }
                    onClick={this.onLabelClick}
                >
                {label}
                </span>

                <div>
                    <IconButton aria-label="delete" href="#">
                        <DeleteIcon fontSize="large" />
                    </IconButton>
                    <div className={styles.button}>
                        <Button color="secondary" href="#"   >!</Button>
                    </div>
                </div>
            </div>

        )
    }
}


export default TodoItem;