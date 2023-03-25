import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFoundError from './pages/NotFound';
import MenuLayout from './components/layouts/MenuLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MenuLayout />}>
        <Route path="" element={<Home />} />
        <Route path="*" element={<NotFoundError />} />
      </Route>
    </Routes>
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
