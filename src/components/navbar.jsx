import React from 'react'; 
import classes from '../modules/navbar.module.scss';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className={classes['navbar']}>
      <h1>Quest</h1>
      <div className={classes['main']}>
          <ul>
          <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/about">About</Link>
          </ul>
          <ul>
            Courses
          </ul>
          <ul>
            Pages
          </ul>
          <ul>
            Blog
          </ul>
      </div>
    </nav>
  );
};
