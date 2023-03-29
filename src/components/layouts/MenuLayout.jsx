import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header'
import Basket from '../Basket';
import { useDispatch, useSelector } from 'react-redux';
import { delProductBasket, fetchProductBasket, delItems } from '../redux/slices/basketSlice';


const MenuLayout = () => {
   const dispatch = useDispatch();
   const [isbasket, setIsbasket] = React.useState(false);

   const removeToCart = (id) => {
      dispatch(delItems(id))
   }

   const openBasket = () => {
      setIsbasket(true);
   }
   const closeBasket = () => {
      setIsbasket(false);
   }
   return (
      <div className="App">
         <div className="wrapper">
            {/* {isbasket && <Basket cartInfo={cartItems} closeClick={closeBasket} onRemoveCart={removeToCart} />} */}
            {isbasket && <Basket closeClick={closeBasket} onRemoveCart={removeToCart} />}
            <Header openClick={openBasket} />
            <div className="section">
               <Outlet />
            </div>
         </div>
      </div>
   )
}
export default MenuLayout;