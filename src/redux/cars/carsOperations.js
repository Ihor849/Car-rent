import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://650748893a38daf4803f5d99.mockapi.io/'

const getAllCars = createAsyncThunk('/cars_list/carsAll', async (_, thunkAPI) => {
  try {
      const { data } = await axios.get('/cars_list');
      console.log(data);
      return data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
});

const getCarById = createAsyncThunk('/cars_list/carsById', async (id, thunkAPI) => {
  try {
      const { data } = await axios.get(`/cars_list/${id}`);
      return data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
});

const addToFavorites = createAsyncThunk('/cars_list/add', async (updateObject, thunkAPI) => {
  try {
    const { id, updatedCar } = updateObject;
    console.log(id)
    const response = await axios.put(
        `/cars/${id}`, updatedCar
    )
    return response.data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
});

const operations = {
  getAllCars,
  getCarById,
  addToFavorites

};

export default operations;