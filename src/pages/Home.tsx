import React from 'react';
import axios from 'axios';
import Card from '../components/Cart';
import Skeleton from '../components/Cart/Skeleton'
import Search from '../components/Search';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct, selectProduct } from '../components/redux/slices/productSlice';
import { fetchProductBasket, selectBasket, setItems } from '../components/redux/slices/basketSlice'
// import { AppContext } from '../App'
import { selectFilter } from '../components/redux/slices/filterSlice';
import { AppDispatch } from '../components/redux/store';


const Home = () => {
   const dispatch = useDispatch<AppDispatch>();
   const { items, status } = useSelector(selectProduct);
   const { searchValue } = useSelector(selectFilter);
   // const { getIsAdded } = React.useContext(AppContext)

   React.useEffect(() => {
      async function productFetch() {
         await dispatch(fetchProductBasket());
         await dispatch(fetchProduct());
      }
      productFetch();
   }, []);



   return (
      <>
         <div className="section-top">
            {searchValue ? <div className='title'>{`Поиск по запросу "${searchValue}"`}</div> : <div className="title">Все кроссовки</div>}
            <div className="section-top__search">
               <Search />
            </div>
         </div>
         <div className="section-bottom">
            <div className="section-bottom__row">
               {status === 'loading' ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj, index = 1) => (
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

export default Home;