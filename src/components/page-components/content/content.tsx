import './content.scss';
import React from 'react';
import LeftSidebar from '../left-sidebar/left-sidebar';
import { useAppSelector } from '../../../hooks';
import { getAuthorizationStatus } from '../../../store/processes/user-process/user-selectors';
import { AuthStatuses } from '../../../const/common-const';

type ContentPropsType = {
  children: JSX.Element[] | JSX.Element
};

function Content({ children }: ContentPropsType) {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authStatus === AuthStatuses.Auth;
  
  // renders
  const renderPrivateContent = () => {
    return (
      <>
        <LeftSidebar />
        <section className='app-content'>{children}</section>
      </>
    );
  };

  return (
    <main className='page-content'>
      {isAuth ? renderPrivateContent() : children}
    </main>
  );
}

export default Content;
