import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useAmount } from '../../hooks/useAmount';

const mockStore = configureStore([]);

describe('useAmount hook', () => {
  it('returns the correct amount', () => {
    const store = mockStore({
      products: {
        productList: [
          { id: 1, name: 'Product 1', price: 10, status: true, quantity: 2 },
          { id: 2, name: 'Product 2', price: 20, status: true, quantity: 1 },
          { id: 3, name: 'Product 3', price: 30, status: false, quantity: 3 },
        ],
      },
    });

    const wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    const { result } = renderHook(() => useAmount(), { wrapper });

    expect(result.current.amount).toBe(40);
  });
});
