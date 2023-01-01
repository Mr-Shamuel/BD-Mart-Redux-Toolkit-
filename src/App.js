// bootstrap 
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import ProductCart from './Components/ProductCart/ProductCart';
import Login from "./Components/Login/Login/Login";
import Register from './Components/Login/Register/Register';
import Shipment from './Components/Shipment/Shipment';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import ProductsList from './Components/Admin/ProductsList/ProductsList';
import UsersLists from './Components/Admin/UsersLists/UsersLists';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App ">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<ProductCart />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/shipment' element={
          <PrivateRoute>
            <Shipment />
          </PrivateRoute>
        } />

        {/* admin  */}
        <Route path='/productsLists' element={<ProductsList />} />
        <Route path='/usersLists' element={<UsersLists />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
