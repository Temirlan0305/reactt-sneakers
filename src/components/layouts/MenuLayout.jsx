import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header'
import Basket from '../Basket';
import axios from 'axios';


const MenuLayout = () => {
   const [cartItems, setCartItems] = React.useState([]);
   const [isbasket, setIsbasket] = React.useState(false);

   const removeToCart = (id) => {
      axios.delete(`https://62b1bba0196a9e98703c1172.mockapi.io/card/${id}`);
      setCartItems((prev) => prev.filter(item => item.id !== id))
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
            {isbasket && <Basket cartInfo={cartItems} closeClick={closeBasket} onRemoveCart={removeToCart} />}
            <Header openClick={openBasket} />
            <div className="section">
               <Outlet />
            </div>
         </div>
      </div>
   )
}
export default MenuLayout;