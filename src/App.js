import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFoundError from './pages/NotFound';
import MenuLayout from './components/layouts/MenuLayout';
import { useSelector } from 'react-redux';
import appContext from ''

function App() {
  const { basketItems } = (state) => state.basket;
  const appContext = React.createContext();
  const setIsAdded = (id) => {
    basketItems.some((item) => Number(item.productId) === Number(id));
  };
  return (
    <appContext.Provider value={setIsAdded}>
      <Routes>
        <Route path="/" element={<MenuLayout />}>
          <Route path="" element={<Home />} />
          <Route path="*" element={<NotFoundError />} />
        </Route>
      </Routes>
    </appContext.Provider>
  );
}

export default App;

// const [count, setCount] = React.useState(0) // React.useState(0) = [0, f()]
// const countPlus = () => {
//   setCount(count + 1)
// }
// const countMinus = () => {
//   setCount(count - 1)
// }
//   <center>
//     <h1>{count}</h1>
//     <button onClick={countPlus} id='plus'>+</button>
//     <button onClick={() => countMinus()} id='minus'>-</button>
//   </center>
