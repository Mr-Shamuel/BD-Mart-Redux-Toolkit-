// bootstrap 
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart/Cart';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import ProductCart from './Components/ProductCart/ProductCart';

function App() {
  return (
    <div className="App ">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<ProductCart />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
