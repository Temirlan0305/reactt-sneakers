import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header'
import Basket from '../Basket';
import { useDispatch, useSelector } from 'react-redux';
import { delProductBasket } from '../redux/slices/basketSlice';


const MenuLayout = () => {
   const { basketItems } = useSelector((state) => state.basket);
   const dispatch = useDispatch();
   const [isbasket, setIsbasket] = React.useState(false);

   const removeToCart = (id) => {
      dispatch(delProductBasket(id))
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
            {isbasket && <Basket closeClick={closeBasket} onRemoveCart={removeToCart} basketItems={basketItems} />}
            <Header openClick={openBasket} />
            <div className="section">
               <Outlet />
            </div>
         </div>
      </div>
   )
}
export default MenuLayout;