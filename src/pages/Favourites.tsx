import React from 'react';
import Card from '../components/Cart';
import Skeleton from '../components/Cart/Skeleton'
import Search from '../components/Search';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../components/redux/store';
import { selectFilter } from '../components/redux/slices/filterSlice';
import { fetchProductFavourite, selectFavourite } from '../components/redux/slices/favouriteSlice';
import { Link } from 'react-router-dom';

const Favourites = () => {
   const dispatch = useDispatch<AppDispatch>();
   const { searchValue } = useSelector(selectFilter);
   const { favouriteItems, favouriteStatus } = useSelector(selectFavourite);

   if (favouriteItems.length < 1) {
      return (
         <div className="not-found__block">
            <div className="emogi">
               <img src="./img/emogi.png" alt="" />
            </div>
            <h1>Закладок нет :(</h1>
            <p>Вы ничего не добавляли в закладки</p>
            <Link to="/">
               <div className="basket-none__button">
                  <button  >Вернуться назад</button>
               </div>
            </Link>
      </div>
      )
   }

   return (
      <>
         <div className="section-top">
            {searchValue ? <div className='title'>{`Поиск по запросу "${searchValue}"`}</div> : <div className="title">Мои закладки</div>}
            <div className="section-top__search">
               <Search />
            </div>
         </div>
         <div className="section-bottom">
            <div className="section-bottom__row">
               {favouriteStatus === 'loading' ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : favouriteItems.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj, index = 1) => (
                  <Card
                     {...obj}
                     key={index++}
                  // onFavourite={(obj) => addFavourite(obj)}
                  // added={basketItems.some(item => Number(item.productId) === Number(obj.id))}
                  // added={obj && getIsAdded(obj.id)}
                  // onPlus={(obj) => addToCart(obj)}
                  />
               ))}
            </div>
         </div>
      </>
   )
}

export default Favourites;