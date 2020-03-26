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

class Item  extends React.Component{
    render(){

         const {label, important = false} = this.props;

        return (
           <Box  m={1} className={styles.box}>

               <div className={styles.box1}>
                   <Checkbox
                       icon={<FavoriteBorder />}
                       checkedIcon={<Favorite />}
                       value="checked"
                   />
                   <ListItem className={styles.box} component="text">
                       <ListItemText primary={label}/>
                   </ListItem>
               </div>

               <div className={styles.box2}>
                   <IconButton
                       aria-label="delete"
                       href="#"
                   >
                       <DeleteIcon fontSize="large"/>

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
}

export default Item;