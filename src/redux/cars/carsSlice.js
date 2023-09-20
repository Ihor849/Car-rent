import { createSlice } from '@reduxjs/toolkit';
import carsOperations from './carsOperations';

const initialState = {
  listCars: [],
  favorites: 0,
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
              state.loading = true;
      })
      .addCase(carsOperations.getAllCars.fulfilled, (state, { payload }) => {
        state.listCars = payload
        state.favorites = payload.filter((item) => item.favorite === true).length 
        state.loading = false;
      })
      .addCase(carsOperations.getAllCars.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })

      
      .addCase(
        carsOperations.addToFavorites.pending, (state) => {
          state.error = null;
          state.reRender = true;
          state.loading = true;
    })
    .addCase(
      carsOperations.addToFavorites.fulfilled,
        (state) => {
            
          state.reRender = false;
          state.loading = false;
        }
    )
    .addCase(
      carsOperations.addToFavorites.rejected,
        (state, { payload }) => {
          state.error = payload;
          state.reRender = false;
          state.loading = false;
        }
    )
      
  },
});

export const carsReducer = carsSlice.reducer;
