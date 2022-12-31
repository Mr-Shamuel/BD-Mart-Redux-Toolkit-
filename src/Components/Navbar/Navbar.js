import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getCartTotal } from '../../Features/cartSlice';
import './Navbar.css';
const Navbar = () => {
    const navigate = useNavigate();
    const { cart, totalQuantity } = useSelector(state => state.cartData);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])
    return (
        <div className=' '>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="fw-bolder fs-3 text-warning">BD Mart</span>
                    <Link to='/'><span>All Products</span></Link>
                    <button onClick={() => navigate('cart')} type="button" className="btn btn-dark btn-rounded"> <i className="fas fa-shopping-cart mx-2 text-warning"></i>Cart ({totalQuantity})</button>




                </div>
            </nav>
        </div>

    );
};

export default Navbar;