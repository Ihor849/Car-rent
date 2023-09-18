import { createSlice } from '@reduxjs/toolkit';
import carsOperations from './carsOperations';

const initialState = {
  list: [],
  item: {},
  make: '',
  year: null,
  rentalPrice: '',
  rentalConditions: '',
  loading: false,
  error: null,
  reRender: false,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
      builder
          .addCase(carsOperations.getAllCars.pending, state => {
              state.error = null;
          })
          .addCase(
            carsOperations.getAllCars.fulfilled,
              (state, { payload }) => {
                  state.listCars = payload.carss
              }
          )
          .addCase(
            carsOperations.getAllCars.rejected,
              (state, { payload }) => {
                  state.error = payload;
              }
          )

          .addCase(carsOperations.getCarById.pending, state => {
            state.error = null;
        })
        .addCase(
          carsOperations.getCarById.fulfilled,
            (state, { payload }) => {
                state.listCars = payload.carss
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


export default carsSlice.reducer;
