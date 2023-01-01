import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartTotal } from '../../Features/cartSlice';
import auth from '../../Firebase/firebaseConfig';
import './Navbar.css';
const Navbar = () => {
    const [user] = useAuthState(auth);
    const { cart, totalQuantity } = useSelector(state => state.cartData);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart])

    console.log(user)
    return (
        <div className='header'>

            <nav className='navs' >
                <div className="navBanner ">
                    <Link to='/'>   <span className="fw-bolder fs-3 text-warning">BD Mart</span></Link>
                </div>
                <div className="navItems">


                    <Link to='/'><span>All Products</span></Link>
                    {
                        user?.email === 'sam@gmail.com' ? <Link to='/dashboard'>Dashboard</Link>


                            : <Link className='btn btn-outline-success   border border-0 rounded-pill '> {user?.email && (user?.displayName || 'user')}</Link>
                    }
                    <Link to='/cart' className="btn btn-rounded"> <i className="fas fa-shopping-cart mx-2 text-warning"></i>Cart ({totalQuantity})</Link>

                    {
                        user?.email ? <Link onClick={() => signOut(auth)} className='btn btn-danger rounded-pill px-4 fw-bold'>SignOut</Link>
                            : <span>
                                <Link to='/login' className='btn btn-info fw-bold  text-white border border-0 rounded-pill px-4'>Login</Link>
                                <Link to='/register' className='btn btn-danger rounded-pill px-4 fw-bold'>Signup</Link>
                            </span>
                    }
                </div>
            </nav>
        </div>

    );
};

export default Navbar;