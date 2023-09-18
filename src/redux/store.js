import { configureStore } from '@reduxjs/toolkit';

import { themeReducer } from './themeSlice';
import { langReducer } from './langSlice';

import carsReducer from "./cars/carsSlice"
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer,
    cars: carsReducer,
  },
});
