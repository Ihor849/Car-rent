import { createSlice } from '@reduxjs/toolkit';
import carsOperations from './carsOperations';

const initialState = {
  listCars: [],
  item: {},
  favorites: [],
  loading: false,
  error: null,
  reRender: false,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(carsOperations.getAllCars.pending, state => {
        state.error = null;
      })
      .addCase(carsOperations.getAllCars.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.listCars = payload;
      })
      .addCase(carsOperations.getAllCars.rejected, (state, { payload }) => {
        state.error = payload;
      })

      
      .addCase(
        carsOperations.addToFavorites.pending, (state) => {
        state.error = null;
        state.reRender = true;
    })
    .addCase(
      carsOperations.addToFavorites.fulfilled,
        (state, { payload }) => {
            console.log('payload', payload)
            state.reRender = false;
            // state.favorites = [...state.favorites, payload]
        }
    )
    .addCase(
      carsOperations.addToFavorites.rejected,
        (state, { payload }) => {
            state.error = payload;
            state.reRender = false;
        }
    )
      
  },
});

export const carsReducer = carsSlice.reducer;
