import { combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

const phonebookReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

export default phonebookReducer;