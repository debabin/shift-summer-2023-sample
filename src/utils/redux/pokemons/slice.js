import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemons } from './thunks';

const initialState = {
  isLoading: true,
  list: []
};

export const prefix = 'pokemons';
const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  extraReducers: {
    [fetchPokemons.pending]: (state) => {
      console.log('@pending');
      state.isLoading = true;
    },
    [fetchPokemons.fulfilled]: (state, action) => {
      console.log('@fulfilled', action);
      state.list = action.payload;
      state.isLoading = false;
    }
  }
});

export const pokemonsReducer = pokemonsSlice.reducer;
