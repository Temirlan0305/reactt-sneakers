import React from 'react';
import Card from '../components/Cart';
import Skeleton from '../components/Cart/Skeleton'
import Search from '../components/Search';
import { useSelector } from 'react-redux';
// import { selectProduct } from '../components/redux/slices/productSlice';
import { selectFilter } from '../components/redux/slices/filterSlice';
import { productApi } from '../components/api/ProductApi';


const Home: React.FC = () => {
   // const { items, status } = useSelector(selectProduct);
   const { searchValue } = useSelector(selectFilter);
   // const { getIsAdded } = React.useContext(AppContext)
   const {data, isLoading, error} = productApi.useFetchAllProductQuery('');


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
               {isLoading === true ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : data.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj, index = 1) => (
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