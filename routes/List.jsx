import React from 'react';
import { Outlet } from 'react-router-dom';

export default function List() {
  return (
    <div>
      List
      <Outlet></Outlet>
    </div>
  );
}
