import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../../const/common-const";
import { AccountsProcessType } from "../../../types/account-types";
import { accountsListAction } from "../../api-actions/accounts-api-actions";

const initialState: AccountsProcessType = {
  accountsList: null
};

export const accountsProcces = createSlice({
  name: NameSpace.Accounts,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Get accounts list
      .addCase(accountsListAction.fulfilled, (state, action) => {
        state.accountsList = action.payload.payload;
      })
  }
});
