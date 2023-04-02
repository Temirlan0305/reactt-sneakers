import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFoundError from './pages/NotFound';
import MenuLayout from './components/layouts/MenuLayout';

export const AppContext = React.createContext({});
const App: React.FC = () => {
  // const [isAdded, setIsAdded] = React.useState(false);
  // const { basketItems } = useSelector(selectBasket);
  // const getIsAdded = (id: number) => {
  //   if (basketItems.length > 0) {
  //     // setIsAdded();
  //     return basketItems.some((item: any) => Number(item.productId) === Number(id))
  //   }
  // };
  return (
    // <AppContext.Provider value={{ getIsAdded }}>
      <Routes>
        <Route path="/" element={<MenuLayout />}>
          <Route path="" element={<Home />} />
          <Route path="*" element={<NotFoundError />} />
        </Route>
      </Routes>
    // </AppContext.Provider>
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
