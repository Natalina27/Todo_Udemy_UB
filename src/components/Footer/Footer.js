import React from "react";
import styles from './Footer.module.css';

const Footer = ({done,toDo}) =>{
    return(
        <div className={styles.footer}>
            <span>We need to do : {toDo}</span>
            <span>Done: {done}</span>
        </div>
    )
};

export default Footer;