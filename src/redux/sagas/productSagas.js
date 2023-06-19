import { fork, takeLatest, put, select } from 'redux-saga/effects';
import {
  getQuantity,
  getSelected,
  getShopping,
  setQuantity,
  setSelected,
  setShopping,
} from '../feature/productReducer';

export function* SelectedProductProcess({ payload }) {
  const id = payload;
  const { productList } = yield select((state) => state.products);
  const productSelected = productList.find((product) => product.id === id);

  const updatedProductSelected = {
    ...productSelected,
    selected: true,
  };
  const updatedProductList = productList.map((product) =>
    product.id === id ? updatedProductSelected : { ...product, selected: false }
  );
  localStorage.setItem('products', JSON.stringify(updatedProductList));
  yield put(setSelected([...updatedProductList]));
}

export function* QuantityProduct({ payload }) {
  console.log(payload);
  const { productList } = yield select((state) => state.products);
  const product = payload;
  const updatedProductList = productList.map((p) =>
    p.id === product.id ? { ...product } : p
  );
  localStorage.setItem('products', JSON.stringify(updatedProductList));

  yield put(setQuantity([...updatedProductList]));
}

export function* setShoppingProcess({ payload }) {
  localStorage.setItem('shoppingCar', JSON.stringify(payload));
  yield put(setShopping(payload));
}

function* getQuantityProduct() {
  yield takeLatest(getQuantity.type, QuantityProduct);
}

function* getSelectedProduct() {
  yield takeLatest(getSelected.type, SelectedProductProcess);
}

function* getShoppingCar() {
  yield takeLatest(getShopping.type, setShoppingProcess);
}

export const productSagas = [
  fork(getSelectedProduct),
  fork(getQuantityProduct),
  fork(getShoppingCar),
];
