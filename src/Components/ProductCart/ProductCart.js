
import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBRow,
    MDBCol,
    MDBContainer
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './ProductCart.css'
import { addToCart } from '../../Features/cartSlice';

const ProductCart = () => {

    const items = useSelector((state) => state.cartData.items);
    const dispatch = useDispatch();

    return (
        <div className="cards">
            <MDBContainer>
                <MDBRow>
                    {
                        items.map(item => {
                            const { id, title, img, price, quantity } = item;
                            return (
                                <MDBCol className='product_card   my-3 text-center' md='4' lg="3" sm='6' xsm='6' key={id} >
                                    <MDBCard className='h-100 ' >
                                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                            <MDBCardImage src={img} className='img-fluid rounded product_img' alt='...' />
                                            <Link>
                                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                            </Link>
                                        </MDBRipple>
                                        <MDBCardBody>
                                            <MDBCardTitle>{title}</MDBCardTitle>
                                            <MDBCardText>
                                                Price: ${price}
                                            </MDBCardText>
                                        </MDBCardBody>
                                        <MDBBtn className='CartBtn  d-block mx-auto' onClick={() => dispatch(addToCart(item))}>Add to cart</MDBBtn>
                                    </MDBCard>
                                </MDBCol>
                            )
                        })




                    }


                </MDBRow>
            </MDBContainer>

        </div >
    );
};

export default ProductCart;