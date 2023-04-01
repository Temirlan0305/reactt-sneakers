import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Basket from '../Basket';
import { useSelector } from 'react-redux';
import { selectBasketOrder } from '../redux/slices/basketOrderSlice';


const MenuLayout = () => {
   const { isOpen } = useSelector(selectBasketOrder);

   return (
      <div className="App">
         <div className="wrapper">
            {/* {isbasket && <Basket cartInfo={cartItems} closeClick={closeBasket} onRemoveCart={removeToCart} />} */}
            {isOpen && <Basket/>}
            <Header />
            <div className="section">
               <Outlet />
            </div>
         </div>
      </div>
   )
}
export default MenuLayout;