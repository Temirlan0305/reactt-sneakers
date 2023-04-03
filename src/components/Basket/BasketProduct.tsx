import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasket } from '../redux/slices/basketSlice';
import {selectBasketOrder, setIsOpen, setIsOrder} from '../redux/slices/basketOrderSlice'
import BasketItem from './BasketItem'
import { AppDispatch } from '../redux/store';



const BasketProduct = () => {
   const dispatch = useDispatch<AppDispatch>();
   type basketType = {
      basketItems: any[];
   }
   const { basketItems }: basketType = useSelector(selectBasket);
   const { totalPrice } = useSelector(selectBasket);
   const onClickOrder = () => {
      dispatch(setIsOrder(basketItems))
   }
   
   return (
      <div className="basket__row">
         <div className="basket__row_product">
            {basketItems && basketItems.map((item) => (
               <BasketItem {...item} key={item.id}e/>
            )
            )}
         </div>
         <div className="basket-prices">
            <div className="basket-prices-wrapper">
               <div className="basket-item">
                  <div className="basket-item__title">Итого: </div>
                  <div className="basket-item__price">{totalPrice} руб. </div>
               </div>
               <div className="basket-item">
                  <div className="basket-item__title">Налог 5%: </div>
                  <div className="basket-item__price">{totalPrice - (totalPrice * 5 /100)} руб. </div>
               </div>
            </div>
            <div className="basket-prices__button">
               <button onClick={() => onClickOrder()}>
                  <span>Оформить заказ</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                     <path d="M1.71436 1L7.71436 7L1.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </button>
            </div>
         </div>
      </div>
   )
}


export default BasketProduct;