import './accounts-list.scss'
import React, { useEffect } from 'react'
import AccountsListItem from '../accounts-list-item/accounts-list-item';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { accountsListAction } from '../../../store/api-actions/accounts-api-actions';
import { getAccountsList } from '../../../store/processes/accounts-proccess/accounts-selectors';


function AccountsList(){
  const dispatch = useAppDispatch();
  const accountList = useAppSelector(getAccountsList);

  //Effects
  useEffect(() => {
    if (accountList) return;

    dispatch(accountsListAction());
  }, []);
  // Renders
  const renderAnimalsList = () =>(
    <ul className='accounts-list'>
      {accountList && accountList.map((account) => (<AccountsListItem accounts={account} key={account.id} />))}
    </ul>
    );
    return renderAnimalsList();
  }

export default AccountsList;
