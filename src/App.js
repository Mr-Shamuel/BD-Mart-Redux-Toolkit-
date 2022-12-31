// bootstrap 
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart/Cart';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import ProductCart from './Components/ProductCart/ProductCart';
import Login from "./Components/Login/Login/Login";
import Register from './Components/Login/Register/Register';
import Shipment from './Components/Shipment/Shipment';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App ">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<ProductCart />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/shipment' element={
          <PrivateRoute>
            <Shipment />
          </PrivateRoute>
        } />
        {/* <Route path='/shipment' element={<Shipment />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
