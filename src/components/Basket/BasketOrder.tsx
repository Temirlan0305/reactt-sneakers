import React from 'react'


type typeProps = {
   closeClick: any;
   text: string;
   title: string;
   image: string;
   isActive: string;
}


const BasketOrder: React.FC<typeProps> = ({ closeClick, text, title, image, isActive }) => {
   return (
      <div className="basket__row">
         <div className='basket-none'>
            <div className="basket-none__wrapper">
               <div className="basket-none__image">
                  <img src={image} alt="" />
               </div>
               <div className={`basket-none__title ${isActive}`}>
                  <h2>{title}</h2>
               </div>
               <div className="basket-none__text">
                  <p>{text}</p>
               </div>
               <div className="basket-none__button">
                  <button onClick={closeClick}>Вернуться назад</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BasketOrder;