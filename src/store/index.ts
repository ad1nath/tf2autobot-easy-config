import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./options-ctx";

const store = configureStore({ reducer: { options: optionReducer } });

export default store;
