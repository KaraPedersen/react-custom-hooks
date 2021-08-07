import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';
const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>Rick And Morty</h1>
      <img src="rick-and-morty.gif" />
      <NavLink  to="/">List</NavLink>
    </header>
  );
};

export default Header;






























