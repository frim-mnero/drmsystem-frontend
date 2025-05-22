import './left-navigation.scss'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { getLanguageCode } from '../../../store/processes/user-process/user-selectors';
import { ANCHORS } from '../../../const/ui-const';
import { AppRoutes } from '../../../const/router-const';

type PageActivityStatus = {
  isActive: boolean;
}

function LeftNavigation() {
  const languageCode = useAppSelector(getLanguageCode);

  //Functions
  const showLinkClassname = ({ isActive }: PageActivityStatus) => isActive ? 'left-navigation-list-link-active' : 'left-navigation-list-link';

  return (
    <ul className='left-navigation-list'>
      <li className='left-navigation-list-item'>
        <NavLink to={AppRoutes.Dashboard} className={showLinkClassname}>
          {ANCHORS.DASHBOARD[languageCode]}
        </NavLink>
      </li>
      <li className='left-navigation-list-item'>
        <NavLink to={AppRoutes.Animals} className={showLinkClassname}>
          {ANCHORS.ANIMALS[languageCode]}
        </NavLink>
      </li>
    </ul>
  );
}

export default LeftNavigation;
