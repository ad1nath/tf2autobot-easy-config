import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    options: [],
    editedOptions: [],
    activeItem: 'miscSettings',
    currentPath: '',
    currentDescription: '',
    descriptions: [],
    toggleDescription: false,
}

const set = (obj, str, val) => {
    str = str.split("_");
    while (str.length > 1)
        obj = obj[str.shift()];
    return obj[str.shift()] = val;
}


const optionSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        editOption(state, action) {
            const { optionValue, optionKeys } = action.payload
            set(state.editedOptions, optionKeys, optionValue)
        },
        makeActive(state, action) {
            state.activeItem = action.payload
        },
        setOptions(state, action) {
            state.options = action.payload
            state.editedOptions = action.payload
        },
        setDescriptions(state, action) {
            state.descriptions = action.payload
        },
        toggleDescriptionBox(state) {
            state.toggleDescription = !state.toggleDescription
        },

        setCurrentDescription(state, action) {
            const { id, description } = action.payload
            state.currentDescription = description || null
            state.currentPath = id
        },
    },
})

export const optionActions = optionSlice.actions
export default optionSlice.reducer



