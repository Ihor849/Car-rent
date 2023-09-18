import { createSlice } from '@reduxjs/toolkit';
import carsOperations from './carsOperations';

const initialState = {
  listCars: [],
  item: {},
  loading: false,
  error: null,
  reRender: false,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
      builder
          .addCase(carsOperations.getAllCars.pending,( state) => {
              state.error = null;
          })
          .addCase(
            carsOperations.getAllCars.fulfilled,
              (state, { payload }) => {
                console.log(payload);
                  state.listCars = payload
              }
          )
          .addCase(
            carsOperations.getAllCars.rejected,
              (state, { payload }) => {
                  state.error = payload;
              }
          )

          .addCase(carsOperations.getCarById.pending, (state) => {
            state.error = null;
        })
        .addCase(
          carsOperations.getCarById.fulfilled,
            (state, { payload }) => {
                state.listCars = payload
            }
        )
        .addCase(
          carsOperations.getCarById.rejected,
            (state, { payload }) => {
                state.error = payload;
            }
        )
          
  },
});


export const carsReducer = carsSlice.reducer;
