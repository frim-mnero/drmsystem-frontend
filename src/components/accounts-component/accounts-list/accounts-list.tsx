import './accounts-list.scss'
import React, { useEffect } from 'react'
import AccountsListItem from '../accounts-list-item/accounts-list-item';
import Loader from '../../page-components/loader/loader';
import Message from '../../page-components/message/message';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { accountsListAction } from '../../../store/api-actions/accounts-api-actions';
import { getAccountsList } from '../../../store/processes/accounts-proccess/accounts-selectors';
import { LoaderColors, LoaderSizes } from '../../../const/classnames-const';
import { ACCOUNTS_MESSAGES } from '../../../const/messages-const';
import { LanguageCodes } from '../../../const/languages-const';
import { MessageTextColors, MessageTextSizes } from '../../../const/common-const';
import { getLanguageCode } from '../../../store/processes/user-process/user-selectors';


function AccountsList(){
  const dispatch = useAppDispatch();
  const accountList = useAppSelector(getAccountsList);
  const languageCode = useAppSelector(getLanguageCode);

  //Effects
  useEffect(() => {
    if (accountList) return;

    dispatch(accountsListAction());
  }, []);

  // Renders
  const renderAccountsList = () =>(
      <ul className="accounts-list">
        {accountList && accountList.map((account) => <AccountsListItem account={account} key={account.id} />)}
      </ul>
    );

    const renderAccountsPageContent = () =>{
      switch (true) {
        case accountList === null:
          return <Loader size={LoaderSizes.Large} color={LoaderColors.Grey} />

        case accountList !== null && accountList.length === 0:
          return (
            <Message
              message={ACCOUNTS_MESSAGES.ACCOUNTS_LIST_IS_EMPTY[languageCode]}
              size={MessageTextSizes.Small}
              color={MessageTextColors.Light}
            />
          );

          default:
            return renderAccountsList();
      }
    };

    return renderAccountsPageContent();
  }

export default AccountsList;
