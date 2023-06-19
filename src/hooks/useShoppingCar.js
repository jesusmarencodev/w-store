import { useDispatch } from 'react-redux';
import { getShopping } from '../redux/feature/productReducer';
import { useAmount } from './useAmount';

export const useShoppingCar = () => {
  const dispatch = useDispatch();
  const { amount } = useAmount();

  const handlerShowCar = (change) => {
    if (amount > 0) {
      dispatch(getShopping(change));
    }
  };
  return {
    handlerShowCar,
  };
};
