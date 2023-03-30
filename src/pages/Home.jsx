import React from 'react';
import axios from 'axios';
import Card from '../components/Cart';
import Skeleton from '../components/Cart/Skeleton'
import Search from '../components/Search';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../components/redux/slices/productSlice';
import { fetchProductBasket, delItems, addItems } from '../components/redux/slices/basketSlice'
import { AppContext } from '../App'


const Home = () => {
   const dispatch = useDispatch();
   const { basketItems } = useSelector((state) => state.basket);
   const { items, status } = useSelector((state) => state.product);
   const { searchValue } = useSelector((state) => state.filter);
   const { getIsAdded } = React.useContext(AppContext)
   const [isFavotite, setIsFavotite] = React.useState([]);

   React.useEffect(() => {
      async function productFetch() {
         await dispatch(fetchProductBasket());
         await dispatch(fetchProduct());
      }
      productFetch();
   }, []);

   const addToCart = (obj) => {
      if (!basketItems.some((item) => Number(item.productId) === Number(obj.productId))) {
         dispatch(addItems(obj))
      } else {
         const item = basketItems.filter((item) => {
            if (Number(item.productId) === Number(obj.productId)) {
               return item
            }
         });
         dispatch(delItems(Number(item[0].id)))
      }
   }
   const addFavourite = (obj) => {
      axios.post('https://62b1bba0196a9e98703c1172.mockapi.io/favorite', obj);
      setIsFavotite((prev) => [...prev, obj])
   }


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
                     key={obj.id}
                     onFavourite={(obj) => addFavourite(obj)}
                     // added={basketItems.some(item => Number(item.productId) === Number(obj.id))}
                     added={obj && getIsAdded(obj.id)}
                     onPlus={(obj) => addToCart(obj)}
                  />
               ))}
            </div>
         </div>
      </>
   )
}

export default Home;