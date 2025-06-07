import './left-sidebar.scss'
import React from 'react';
import LeftNavigation from '../left-navigation/left-navigation';

function LeftSidebar() {

  return (
    <nav className='left-sidebar'>
      <LeftNavigation />
    </nav>
  );
}

export default LeftSidebar;
