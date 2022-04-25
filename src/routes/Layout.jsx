import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Outlet />
      <div className="footer">
        <ul className="footer__links">
          <li>Careers</li>
          <li>Team</li>
          <li>Why us</li>
          <li>Training and development</li>
          <li>Book a demo</li>
        </ul>
      </div>
    </>
  );
}
