import React from 'react';
import { Link } from 'react-router-dom';
// import { styles } from 'ansi-colors';




const Header = () => {
  return (
    <header className={Header}>
      <Link to="/">
        <img src="rick-and-morty.gif" />
        <h1> Rick and Morty Again!</h1>
      </Link>
      <Link to="/">Home</Link>
      <Link to="/">Rick</Link>
      <Link to="/">Morty</Link>
    </header>
  );
};

export default Header;
