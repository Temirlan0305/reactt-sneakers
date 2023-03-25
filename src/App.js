import React from 'react'
import axios from 'axios'
import Card from './components/Card';
import Header from './components/Header'
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([]);
  const [isFavotite, setIsFavotite] = React.useState([]);
  const [isbasket, setIsbasket] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');


  React.useEffect(() => {
    // fetch('https://62b1bba0196a9e98703c1172.mockapi.io/itemsSneakers').then((res) => {
    // return res.json();
    // }).then((json) => {
    //   setItems(json);
    // });
    axios.get('https://62b1bba0196a9e98703c1172.mockapi.io/itemsSneakers').then((res) => {
      setItems(res.data);
    });
    axios.get('https://62b1bba0196a9e98703c1172.mockapi.io/card').then((res) => {
      setCartItems(res.data);
    });
  }, []);
  const openBasket = () => {
    setIsbasket(true);
  }
  const closeBasket = () => {
    setIsbasket(false);
  }

  const addToCart = (obj) => {
    axios.post('https://62b1bba0196a9e98703c1172.mockapi.io/card', obj);
      setCartItems((prev) => [...prev, obj])
  }
  const addFavourite = (obj) => {
    axios.post('https://62b1bba0196a9e98703c1172.mockapi.io/favorite', obj);
    setIsFavotite((prev) => [...prev, obj])
  }
  
  const removeToCart = (id) => {
    axios.delete(`https://62b1bba0196a9e98703c1172.mockapi.io/card/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onChangeInput = (event) => {
    setSearchInput(event.target.value)
  }

  return (
    <div classNameName="App">
      <div className="wrapper">
        {isbasket && <Drawer cartInfo={cartItems} closeClick={closeBasket} onRemoveCart={removeToCart}/>}
        <Header openClick={openBasket}/>
        <div className="section">
          <div className="section-top">
              {searchInput ? `Поиск по запросу "${searchInput}"` : <div className="title">Все кроссовки</div>}
              <div className="section-top__search">
                {searchInput && <button onClick={() => {setSearchInput('')}}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
                    <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
                  </svg>
                </button>}
                <input onChange={onChangeInput} value={searchInput} type="text"/>
              </div>
          </div>
          <div className="section-bottom">
              <div className="section-bottom__row">
                {items.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase())).map((obj, index = 1) => (
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
        </div>
      </div>
    </div>
  );
}

export default App;





// const [count, setCount] = React.useState(0) // React.useState(0) = [0, f()]
  // const countPlus = () => {
  //   setCount(count + 1)
  // }
  // const countMinus = () => {
  //   setCount(count - 1)
  // }
  //   <center>
  //     <h1>{count}</h1>
  //     <button onClick={countPlus} id='plus'>+</button>
  //     <button onClick={() => countMinus()} id='minus'>-</button>
  //   </center>