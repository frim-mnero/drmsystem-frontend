import './accounts-list-item.scss'
import React from "react";
import { CURRENCIES } from "../../../const/ui-const";
import { useAppSelector } from "../../../hooks";
import { getLanguageCode } from "../../../store/processes/user-process/user-selectors";
import { AccountsListItemType } from "../../../types/account-types";

type AnimalListItemPropsType = {
  accounts: AccountsListItemType;
}

function AccountsListItem({ accounts } : AnimalListItemPropsType){
  const languageCode = useAppSelector(getLanguageCode);

  return(
    <li className="accounts-list-item">
        <p className="accounts-list-item-name">{accounts.name}</p>
        <p className="accounts-list-item-balance">{accounts.balance}<span className='account-list-item-currency'>{CURRENCIES.RUB[languageCode]}</span>.</p>
    </li>
  )
}

export default AccountsListItem;
