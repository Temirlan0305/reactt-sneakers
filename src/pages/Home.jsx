import React from 'react';
import axios from 'axios';
import Card from '../components/Cart';
import Skeleton from '../components/Cart/Skeleton'
import Search from '../components/Search';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../components/redux/slices/productSlice';


const Home = () => {
   const dispatch = useDispatch();
   const { items, status } = useSelector((state) => state.product)
   const { searchValue } = useSelector((state) => state.filter)
   // const [items, setItems] = React.useState([])
   const [isFavotite, setIsFavotite] = React.useState([]);


   React.useEffect(() => {
      dispatch(fetchProduct())
      // axios.get('https://62b1bba0196a9e98703c1172.mockapi.io/card').then((res) => {
      //    setCartItems(res.data);
      // });
   }, []);

   const addToCart = (obj) => {
      axios.post('https://62b1bba0196a9e98703c1172.mockapi.io/card', obj);
      // setCartItems((prev) => [...prev, obj])
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
                     title={obj.title}
                     price={obj.price}
                     image={obj.imageURL}
                     key={index++}
                     onFavourite={(obj) => addFavourite(obj)}
                     onPlus={(obj) => addToCart(obj)}
                  />
               ))}
            </div>
         </div>
      </>
   )
}

export default Home;