import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import NotFoundError from './pages/NotFound';
import MenuLayout from './components/layouts/MenuLayout';
import { fetchProductBasket } from './components/redux/slices/basketSlice'
import { fetchProductFavourite } from './components/redux/slices/favouriteSlice';
import { fetchProduct } from './components/redux/slices/productSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './components/redux/store';


export const AppContext = React.createContext({});
const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const [isAdded, setIsAdded] = React.useState(false);
  // const { basketItems } = useSelector(selectBasket);
  // const getIsAdded = (id: number) => {
  //   if (basketItems.length > 0) {
  //     // setIsAdded();
  //     return basketItems.some((item: any) => Number(item.productId) === Number(id))
  //   }
  // };
  React.useEffect(() => {
    async function productFetch() {
       await dispatch(fetchProductBasket());
       await dispatch(fetchProductFavourite());
       await dispatch(fetchProduct());
    }
    productFetch();
 }, []);
  return (
    // <AppContext.Provider value={{ getIsAdded }}>
      <Routes>
        <Route path="/" element={<MenuLayout />}>
          <Route path="" element={<Home />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="*" element={<NotFoundError />} />
        </Route>
      </Routes>
    // </AppContext.Provider>
  );
}

export default App;
