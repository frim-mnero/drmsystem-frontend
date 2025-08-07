import { NameSpace } from "../../../const/common-const";
import { StateType } from "../../../types/state-types";
import { AccountsListType } from "../../../types/account-types";

export const getAccountsList = (state: StateType): AccountsListType | null => state[NameSpace.Accounts].accountsList;
