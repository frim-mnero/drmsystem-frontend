import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiResponseType } from "../../types/api-types";
import { AnimalsListType } from "../../types/animal-types";
import { AppDispatchType, StateType } from "../../types/state-types";
import { AxiosInstance } from "axios";
import { APIRoutes } from "../../const/api-const";


export const animalsListAction = createAsyncThunk<ApiResponseType<AnimalsListType>, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}
>
(
  'animalsListAction',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<ApiResponseType<AnimalsListType>>(APIRoutes.Animals);

    return data;
  }
);
