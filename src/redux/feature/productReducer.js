import { createSlice } from '@reduxjs/toolkit';

const movieReducer = createSlice({
  name: 'products',
  initialState: {
    productList: [],
    shoppingCar: false,
  },
  reducers: {
    getProducts: (state, action) => {
      state.productList = action.payload;
    },
    getSelected(id) {
      return id;
    },
    setSelected: (state, action) => {
      state.productList = action.payload;
    },
    getQuantity(product) {
      return product;
    },
    setQuantity: (state, action) => {
      state.productList = action.payload;
    },
    getShopping(shoppingCar) {
      return shoppingCar;
    },
    setShopping: (state, action) => {
      state.shoppingCar = action.payload;
    },
  },
});

export const {
  getProducts,
  getSelected,
  setSelected,
  getQuantity,
  setQuantity,
  getShopping,
  setShopping,
} = movieReducer.actions;

export default movieReducer.reducer;
