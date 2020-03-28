import React from 'react';
import 'typeface-roboto';
import styles from './Item.module.css';
import {
  Box, Checkbox, IconButton, Button, ListItem, ListItemText, Typography
} from '@material-ui/core';
import { FavoriteBorder, Favorite, Delete as DeleteIcon } from '@material-ui/icons';
import classnames from 'classnames';


class Item extends React.Component {
    state = {
      isDone: false,
      isImportant: false,
      fontWeight: 400,
      textColor: 'black'
    };

    onClickDone = () => {
      this.setState({
        isDone: !this.state.isDone,
        isImportant: false,
        fontWeight: 400
      });
    };

    onClickImportant = () => {
      const { fontWeight, textColor, isDone } = this.state;
      const newFontWeight = fontWeight === 400 ? 600 : 400;
      const newTextColor = textColor === 'black' ? 'red' : 'black';
      if (!isDone) {
        this.setState({
          isImportant: !this.state.isImportant,
          fontWeight: newFontWeight,
          textColor: newTextColor
        });
      }
    };


    render() {
      const { label } = this.props;
      const { isDone, isImportant, fontWeight } = this.state;
      return (
        <Box m={1} className={styles.box}>
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
                                style={ { fontWeight } }
                                component={''}
                                >
                                   {label}
                                 </Typography>
                             }
                            className={classnames({
                              [styles.done]: isDone,
                              [styles.important]: isImportant
                            })}
                        />
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
      );
    }
}

export default Item;
