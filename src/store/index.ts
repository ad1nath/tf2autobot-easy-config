import { configureStore } from "@reduxjs/toolkit";
import optionReducer, { OptionState } from "./options-ctx";

export interface RootState {
  options: OptionState;
}
const store = configureStore<RootState>({
  reducer: { options: optionReducer },
});

export default store;
