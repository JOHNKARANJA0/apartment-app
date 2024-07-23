import React from 'react';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar'; // Import the LeftNavBar component

export default function Layout() {

  return (
    <div style={{ display: 'flex' }}>
      <NavBar /> {/* Include the LeftNavBar component */}
      <div style={{ flexGrow: 1, marginLeft: '50px' }}> {/* Adjust margin or padding as needed */}
        <div className='bg-gray-100 text-lg container mx-auto min-h-[90vh]'>
          <Outlet />
          {/* render current route selected */}
        </div>
      </div>
    </div>
  );
}