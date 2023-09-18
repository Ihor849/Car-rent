import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://650748893a38daf4803f5d99.mockapi.io/'

const getAllCars = createAsyncThunk('/car_list/carsAll', async (_, thunkAPI) => {
  try {
      const { data } = await axios.get('/car_list');
      return data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
});

const getCarById = createAsyncThunk('/car_list/carsById', async (id, thunkAPI) => {
  try {
      const { data } = await axios.get(`/car_list/${id}`);
      return data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
});

const operations = {
  getAllCars,
  getCarById

};

export default operations;