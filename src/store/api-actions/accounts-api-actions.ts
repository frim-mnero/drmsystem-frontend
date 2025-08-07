import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiResponseType } from "../../types/api-types";
import { AppDispatchType, StateType } from "../../types/state-types";
import { AxiosInstance } from "axios";
import { APIRoutes } from "../../const/api-const";
import { AccountsListType } from "../../types/account-types";


export const accountsListAction = createAsyncThunk<ApiResponseType<AccountsListType>, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}
>
(
  'accountsListAction',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<ApiResponseType<AccountsListType>>(APIRoutes.Accounts);

    return data;
    
  }
);
