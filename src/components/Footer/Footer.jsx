import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ done, toDo }) =>{
  return (
        <div className={styles.footer}>
            <span>WE NEED TO DO : {toDo}</span>
            <span>DONE : {done}</span>
        </div>
  );
};

export default Footer;
