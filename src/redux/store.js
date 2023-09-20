import { configureStore } from '@reduxjs/toolkit';

import { themeReducer } from './themeSlice';

import {carsReducer} from "./cars/carsSlice"
import { filterReducer } from "./filterSlice";
import { modalReducer } from "./modalSlice";


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    cars: carsReducer,
    filter: filterReducer,
    modal: modalReducer,
  },
});
