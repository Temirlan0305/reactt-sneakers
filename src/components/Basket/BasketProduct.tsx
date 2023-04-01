import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasket, delItems } from '../redux/slices/basketSlice';


const BasketProduct = () => {
   const dispatch = useDispatch()
   type basketType = {
      basketItems: any[];
   }
   const {basketItems}: basketType = useSelector(selectBasket)
   const onRemoveCart = (id: number) => {
      dispatch(delItems(id))
   }
   return (
      <div className="basket__row">
         <div className="basket__row_product">
            {basketItems && basketItems.map((item) => (
               <div className="basket__item">
                  <div className="basket__image">
                     <img width={70} height={70} src={item.imageURL} alt="name" />
                  </div>
                  <div className="basket__text">
                     <h2>{item.title}</h2>
                     <p>{item.price} руб.</p>
                  </div>
                  <button onClick={() => onRemoveCart(item.id)}>
                     <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
                        <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
                     </svg>
                  </button>
               </div>
            )
            )}
         </div>
         <div className="basket-prices">
            <div className="basket-prices-wrapper">
               <div className="basket-item">
                  <div className="basket-item__title">Итого: </div>
                  <div className="basket-item__price">21 498 руб. </div>
               </div>
               <div className="basket-item">
                  <div className="basket-item__title">Налог 5%: </div>
                  <div className="basket-item__price">1074 руб. </div>
               </div>
            </div>
            <div className="basket-prices__button">
               <button>
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