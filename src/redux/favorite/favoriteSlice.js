import { createSlice } from '@reduxjs/toolkit';
import favoriteOperations from './favoriteOperations';

const initialState = {
  listFavorite: [],
  item: {},
  loading: false,
  error: null,
  reRender: false,
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  extraReducers: builder => {
      builder
          .addCase(favoriteOperations.getFavoriteCars.pending,( state) => {
              state.error = null;
          })
          .addCase(
            favoriteOperations.getFavoriteCars.fulfilled,
              (state, { payload }) => {
                console.log(payload);
                  state.listFavorite = payload
              }
          )
          .addCase(
            favoriteOperations.getFavoriteCars.rejected,
              (state, { payload }) => {
                  state.error = payload;
              }
          )

        //   .addCase(carsOperations.getCarById.pending, (state) => {
        //     state.error = null;
        // })
        // .addCase(
        //   carsOperations.getCarById.fulfilled,
        //     (state, { payload }) => {
        //         state.listCars = payload
        //     }
        // )
        // .addCase(
        //   carsOperations.getCarById.rejected,
        //     (state, { payload }) => {
        //         state.error = payload;
        //     }
        // )
          
  },
});


export const favoriteReducer = favoriteSlice.reducer;
