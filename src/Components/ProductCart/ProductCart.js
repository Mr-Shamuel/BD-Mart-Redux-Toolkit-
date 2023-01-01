
import React from 'react';
import {

    MDBRow,
    MDBContainer
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import './ProductCart.css'
import { addToCart } from '../../Features/cartSlice';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Slider from '../Slider/Slider';

const ProductCart = () => {

    const items = useSelector((state) => state.cartData.items);
    const dispatch = useDispatch();
    const handleAddToCart = (item) => {

        dispatch(addToCart(item));
        toast.success('Product Added', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });


    }

    return (
        <div className="cards">

            {/* banner slider  */}
            <Slider></Slider>

            <MDBContainer>
                <h1 className='text-center text-info mt-3'>All Products : </h1>
                <MDBRow>
                    {
                        items.map(item => {
                            const { title, img, price, } = item;
                            return (
                                <div className='ProductCon  d-flex align-items-center justify-content-center col-sm-12  col-md-6 col-lg-4 col-xl-3'>
                                    <div className="product p-4 my-3 ">
                                        <div className="productImg d-flex align-items-center justify-content-center ">
                                            <img src={img} height={'200px'} alt="" />
                                        </div>
                                        <div className="title text-center">
                                            <h6>{title.slice(0, 12)}</h6>

                                            <h4>${price}</h4>
                                        </div>
                                        <div className="productsBtn">

                                            <button onClick={() => handleAddToCart(item)} className='btn btn-info px-5 rounded-pill '><AddShoppingCartIcon /> Add </button>

                                        </div>
                                    </div>
                                </div>
                            )
                        })




                    }


                </MDBRow>
            </MDBContainer>
            <ToastContainer
                position="bottom-center"
                autoClose={1000}
                limit={3}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </div >
    );
};

export default ProductCart;