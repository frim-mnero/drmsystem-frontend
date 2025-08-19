import './accounts-list-item.scss'
import React from "react";
import { CURRENCIES } from "../../../const/ui-const";
import { useAppSelector } from "../../../hooks";
import { getLanguageCode } from "../../../store/processes/user-process/user-selectors";
import { AccountsListItemType } from "../../../types/account-types";

type AccountsListItemPropsType = {
  account: AccountsListItemType;
}

function AccountsListItem({ account } : AccountsListItemPropsType){
  const languageCode = useAppSelector(getLanguageCode);

  return (
    <li className="accounts-list-item">
      <div className="accounts-list-item-name">
        {account.name}
      </div>

      <div className="accounts-list-item-balance">
        {account.balance} <span className="account-list-item-currency">{CURRENCIES.RUB[languageCode]}.</span>
      </div>
    </li>
  );
}

export default AccountsListItem;
