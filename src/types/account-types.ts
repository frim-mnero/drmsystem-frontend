export type AccountsProcessType = {
  accountsList: AccountsListType | null
};

export type AccountsListItemType = {
  id: number,
  name: string,
  balance: number,
  isArchive: boolean
};

export type AccountsListType = AccountsListItemType[];
