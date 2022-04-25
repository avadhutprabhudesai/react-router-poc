import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Outlet />
      <h3>Footer</h3>
    </>
  );
}
