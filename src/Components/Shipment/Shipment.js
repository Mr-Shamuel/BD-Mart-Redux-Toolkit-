import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import swal from 'sweetalert';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import shipimg from '../../Img/hd regimg.png';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { totalQuantity, totalPrice } = useSelector(state => state.cartData)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (e) => {

        swal({
            title: "Thanks For Your Order",
            text: "Your Order is successfully Placed",
            icon: "success",
            button: "ok",
        })
            .then(() => navigate('/'))

    };



    return (

        <div className="container mb-5" data-aos="zoom-out"
            data-aos-duration="1000">

            <h3 className="text-center">Please Complete your order by filling up this form</h3>



            <div className="row">
                <div className="col-md-6">
                    <form className="ship-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {/* <input className="bg-info" defaultValue={"Total Price : $" + totalPrice}   {...register("cart", { required: true })} />
                        <input className="bg-info" defaultValue={"Total Quantity : $" `${totalQuantity}`}   {...register("cart", { required: true })} /> */}

                        <p className='text-warning fw-bold'>Total Quantity : {totalQuantity}</p>
                        <p className='text-warning fw-bold'>Total Price : {totalPrice}</p>


                        <input defaultValue={user.displayName}  {...register("name", { required: true })} placeholder="Enter Your name" />
                        {errors.name && <span className="error  ">Name is required</span>}

                        <input defaultValue={user.email}   {...register("email", { required: true })} placeholder="Enter your email" />
                        {errors.email && <span className="error">Email is required</span>}

                        <input   {...register("address", { required: true })} placeholder="Your Address" />
                        {errors.address && <span className="error">Addressr is required</span>}
                        <input   {...register("phone", { required: true })} placeholder="Your Phone Number" />
                        {errors.phone && <span className="error">Phone Number is required</span>}

                        <input className="btn btn-primary " type="submit" />


                    </form>
                </div>
                <div className="col-md-6">
                    {/* <img style={{ width: '50%', display: "block", margin: "30px auto" }} src={shipimg} alt="" /> */}
                </div>
            </div>




        </div>
    );
};

export default Shipment;