import React from "react";
import 'typeface-roboto';
import styles from './Item.module.css';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import classnames from 'classnames';
import Typography from "@material-ui/core/Typography";


class Item  extends React.Component {
    state = {
        isDone: false,
        isImportant: false,
        fontWeight: 400
    };

    onClickDone = () => {
        this.setState({isDone: !this.state.isDone})
    };

    onClickImportant = () => {
        const { fontWeight} = this.state;
        const newFontWeight = fontWeight === 400 ? 600 : 400;
        return this.state.isDone ?   null :
             this.setState({isImportant: !this.state.isImportant,
                 fontWeight: newFontWeight })
    };


    render() {
        const {label} = this.props;
        const {isDone, isImportant, fontWeight} = this.state;
        return (
        <Box  m={1} className={styles.box}>
            <div className={styles.box1}>
                <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    value="checked"
                    onClick={this.onClickDone}

                />
                    <ListItem className={styles.box} component="li">
                        <ListItemText
                            primary={
                                <Typography
                                    style={{fontWeight }}
                                    component={'li'}>
                                   {label}
                                </Typography>
                            }

                            className={classnames({
                                [styles.done]: isDone,
                                [styles.important]:isImportant
                            })}/>
                    </ListItem>
                </div>

                <div className={styles.box2}>
                    <IconButton
                        aria-label="delete"
                        href="#"
                    >
                        <DeleteIcon fontSize="large"/>

                    </IconButton>
                    <div className={styles.importantBox}>
                        <Button
                            color="secondary"
                            href="#"
                            onClick={this.onClickImportant}

                        >!</Button>
                    </div>

                </div>

            </Box>
        )
    }
}

export default Item;