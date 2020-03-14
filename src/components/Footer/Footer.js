import React from "react";
import styles from './Footer.module.css';

const Footer = (props) =>{
    return(
        <div className={styles.footer}>
            <span>We need to do : {props.count}</span>
            <span>Done: {props.count}</span>
        </div>
    )
};

export default Footer;