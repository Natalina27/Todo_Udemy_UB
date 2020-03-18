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
    // state ={
    //     done: false,
    //     important: false
    // };
    // onCheckboxClick = () => {
    //     this.setState(({done}) =>{
    //         return{
    //             done: !done
    //         };
    //     });
    // };
    //
    // onImportantClick = () => {
    //     this.setState(({important}) => {
    //         return {
    //             important: !important
    //         };
    //     });
    // };

    render(){

        const {label,
            onDeleted,
            onToggleDone,
            onToggleImportant,
            done,
            important} = this.props;


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
                    //onClick={this.onCheckboxClick}
                    onClick={onToggleDone}

                />
                <span
                    className={classNames }
                >
                {label}
                </span>

                <div>
                    <IconButton
                        aria-label="delete"
                        href="#"
                        onClick={onDeleted}
                    >
                        <DeleteIcon
                            fontSize="large"/>
                    </IconButton>
                    <div className={styles.button}>
                        <Button
                            color="secondary"
                            href="#"
                            //onClick={this.onImportantClick}
                            onClick={onToggleImportant}

                        >!</Button>
                    </div>
                </div>
            </div>

        )
    }
}


export default TodoItem;