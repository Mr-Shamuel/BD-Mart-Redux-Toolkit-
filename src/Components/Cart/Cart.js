import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTooltip,
    MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal, removeItem, decreaseItemQuantity, increaseItemQuantity } from "../../Features/cartSlice";
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export default function Cart() {
    const navigate = useNavigate()
    const { cart, totalPrice, totalQuantity } = useSelector(state => state.cartData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [])


    const handleDelete = (id) => {
        dispatch(removeItem(id))

        //toast notifications
        toast.warn('Product Removed', {
            position: "bottom-center",
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
        <section className="h-100 gradient-custom">
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center my-4">
                    <MDBCol md="8">
                        <MDBCard className="mb-4">
                            <MDBCardHeader className="py-3">
                                <MDBTypography tag="h5" className="mb-0">
                                    Cart -{cart.length} items
                                </MDBTypography>
                            </MDBCardHeader>
                            <MDBCardBody>

                                {
                                    cart.map(item => {
                                        const { title, id, price, img, quantity, category, seller, stock } = item;
                                        console.log(quantity)
                                        return (


                                            <MDBRow>
                                                <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                                                    <MDBRipple rippleTag="div" rippleColor="light"
                                                        className="bg-image rounded hover-zoom hover-overlay">
                                                        <img
                                                            src={img}
                                                            className="w-100" alt="xys" />
                                                        <a href="#!">
                                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)", }}>
                                                            </div>
                                                        </a>
                                                    </MDBRipple>
                                                </MDBCol>

                                                <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                                                    <p>
                                                        <strong>{title.slice(0, 15)}</strong>
                                                    </p>

                                                    <p>ID: {id}</p>
                                                    <p>category: {category}</p>
                                                    <p>seller: {seller}</p>
                                                    <p>stock: {stock}</p>


                                                    {/* <MDBTooltip  wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                                                        title="Remove item">
                                                        <MDBIcon fas icon="trash" />
                                                    </MDBTooltip> */}


                                                    <MDBBtn onClick={() => handleDelete(id)} className="px-3 ms-2 btn-danger">
                                                        <MDBIcon fas icon="trash" />
                                                    </MDBBtn>
                                                    <hr />

                                                </MDBCol>
                                                <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                                                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                                                        <MDBBtn onClick={() =>
                                                            dispatch(decreaseItemQuantity(id))
                                                        } className="px-3 me-2">
                                                            <MDBIcon fas icon="minus" />
                                                        </MDBBtn>

                                                        <MDBInput onChange={() => null} value={quantity} min={0} type="number" label="Quantity" />

                                                        <MDBBtn onClick={() =>
                                                            dispatch(increaseItemQuantity(id))
                                                        } className="px-3 ms-2">
                                                            <MDBIcon fas icon="plus" />
                                                        </MDBBtn>
                                                    </div>

                                                    <p className="text-start text-md-center">
                                                        <strong>${price * quantity}</strong>
                                                    </p>
                                                </MDBCol>
                                            </MDBRow>
                                        )


                                    })

                                }

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol md="4">
                        <MDBCard className="mb-4">
                            <MDBCardHeader>
                                <MDBTypography tag="h5" className="mb-0">
                                    Summary
                                </MDBTypography>
                            </MDBCardHeader>
                            <MDBCardBody>
                                <MDBListGroup flush>
                                    <MDBListGroupItem
                                        className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products Quantity
                                        <span>{totalQuantity}</span>
                                    </MDBListGroupItem>

                                    <MDBListGroupItem
                                        className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>

                                        </div>
                                        <span>
                                            <strong>${totalPrice}</strong>
                                        </span>
                                    </MDBListGroupItem>
                                </MDBListGroup>

                                <MDBBtn block size="lg" onClick={() => navigate('/shipment')}>
                                    Go to checkout
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
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
        </section >

    );
}