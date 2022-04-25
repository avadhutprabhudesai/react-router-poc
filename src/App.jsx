import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import style from './App.module.css';

export default function App() {
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <Link to="/dogs">Dogs</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}
