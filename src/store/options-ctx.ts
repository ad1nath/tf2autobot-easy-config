import { createSlice } from "@reduxjs/toolkit";

type Description = {
  type: string;
  default: string;
  details: string;
  note: string;
  parameters: string;
  example: string;
};
export interface OptionState {
  options: Record<string, any>;
  editedOptions: Record<string, any>;
  activeItem: string;
  currentPath: string;
  currentDescription?: Description | null;
  descriptions: Record<string, any>[];
  toggleDescription: boolean;
  currentValues: any;
}
const initialState: OptionState = {
  options: [],
  editedOptions: [],
  activeItem: "miscSettings",
  currentPath: "",
  currentDescription: undefined,
  descriptions: [],
  toggleDescription: false,
  currentValues: {},
};

const set = (obj: Record<string, any>, path: string, val: any) => {
  const keys = path.split("_");
  const lastKey = keys.pop();
  let current = obj;
  for (const key of keys) {
    current = current[key];
  }
  if (lastKey !== undefined) {
    current[lastKey] = val;
  }
  return val;
};

const optionSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    editOption(state, action) {
      const { optionValue, optionKeys } = action.payload;
      set(state.editedOptions, optionKeys, optionValue);
      state.currentValues[optionKeys] = optionValue;
    },
    makeActive(state, action) {
      state.activeItem = action.payload;
    },
    setOptions(state, action) {
      state.options = action.payload;
      state.editedOptions = action.payload;
    },
    setDescriptions(state, action) {
      state.descriptions = action.payload;
    },
    toggleDescriptionBox(state) {
      state.toggleDescription = !state.toggleDescription;
    },

    setCurrentDescription(state, action) {
      const { id, description } = action.payload;
      state.currentDescription = description || null;
      state.currentPath = id;
    },
  },
});

export const optionActions = optionSlice.actions;
export default optionSlice.reducer;
