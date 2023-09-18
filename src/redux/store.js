import { configureStore } from '@reduxjs/toolkit';

import { themeReducer } from './themeSlice';
import { langReducer } from './langSlice';

import {carsReducer} from "./cars/carsSlice"
import { filterReducer } from "./filterSlice";
import { modalReducer } from "./modalSlice";


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer,
    cars: carsReducer,
    filter: filterReducer,
    modal: modalReducer,
  },
});
