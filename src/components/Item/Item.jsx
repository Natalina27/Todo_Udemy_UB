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


const Item = ({label, important = false}) => {

    return (
        <Box  m={1} className={styles.box}>
                <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    value="checked"

                />
                <div className={styles.text}>
                {label}
                </div>
            <div className={styles.buttons}>
                <IconButton
                    aria-label="delete"
                    href="#"
                >
                    <DeleteIcon
                        fontSize="large"/>
                </IconButton>
                <div className={styles.important}>
                    <Button
                        color="secondary"
                        href="#"

                    >!</Button>
                </div>
            </div>

        </Box>
    )
};
export default Item;