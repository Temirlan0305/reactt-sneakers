import React from 'react'


const BasketSucces = () => {
   return (
      <div className="basket__row">
         <div className='basket-none'>
            <div className="basket-none__wrapper">
               <div className="basket-none__image">
                  <img src="/img/basket.png" alt="" />
               </div>
               <div className="basket-none__title">
                  <h2>Корзина пустая</h2>
               </div>
               <div className="basket-none__text">
                  <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BasketSucces;