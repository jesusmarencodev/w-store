import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import { useChargeData } from './hooks/useChargeData';

function App() {
  useChargeData();

  return (
    <div className="app">
      <h2 className="app__title">MINI &middot; MARKET </h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie/:id" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
