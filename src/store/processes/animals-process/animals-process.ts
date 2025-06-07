import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../../const/common-const";
import { animalsListAction } from "../../api-actions/animals-api-actions";
import { AnimalsProcessType } from "../../../types/animal-types";

const initialState: AnimalsProcessType = {
  animalsList: null
};

export const animalsProcces = createSlice({
  name: NameSpace.Animals,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Get animals list
      .addCase(animalsListAction.fulfilled, (state, action) => {
        state.animalsList = action.payload.payload;
      })
  }
});
