import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://650748893a38daf4803f5d99.mockapi.io/'

const getAllFavorite = createAsyncThunk('/favorite', async (_, thunkAPI) => {
  try {
      const { data } = await axios.get('/favorite');
      console.log(data);
      return data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
});

const getFavoriteById = createAsyncThunk('/favorite/favoriteById', async (id, thunkAPI) => {
  try {
      const { data } = await axios.put(`/cars_list/${id}`);
      return data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
});

const operations = {
  getAllFavorite,
  getFavoriteById

};

export default operations;