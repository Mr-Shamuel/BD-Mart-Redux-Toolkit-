import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../../icon/google.png'
import './Register.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer } from 'react-toastify';
import { useUpdateProfile } from 'react-firebase-hooks/auth';

import auth from '../../../Firebase/firebaseConfig';
import axios from 'axios';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    //create user account
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleName = (e) => { setName(e.target.value) }
    const handleEmail = (e) => { setEmail(e.target.value) }
    const handlePassword = (e) => { setPassword(e.target.value) }

    // update profile 
    const [updateProfile] = useUpdateProfile(auth);

    const handleSubmit = async (e) => {

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        //posting data to server 
        axios.post('https://63ac4337da81ba97617eebed.mockapi.io/users', {
            name: name,
            email: email,
        })
            .then((response) => {

            });
        e.preventDefault();
    }

    // google signing 
    const [GoogleSignIn] = useSignInWithGoogle(auth);
    const HandleGoogleSignIn = (e) => {
        GoogleSignIn()
            .then(() => {
                navigate(form, { replace: true })
            })
    }

    //redirect or location
    const location = useLocation();
    const form = location?.state?.from?.pathname || '/';

    if (user) {
        navigate(form, { replace: true })
    }
    //spinner
    if (loading) {
        return <div className="spinner-border text-danger text-center d-block mx-auto mt-5 " role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    return (
        <div>
            {/* using toast notifications  */}
            <ToastContainer></ToastContainer>

            <div className='register mt-4 vh-100'>
                <div>
                    <Box className='registerCon'
                        onSubmit={handleSubmit}
                        component="form"
                        sx={{
                            '& > :not(style)': { mx: 3, my: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <h4>Create an account</h4>


                        {/* <TextField name='name' id="standard-basic" label="Name" variant="standard" /> */}
                        <TextField onBlur={handleName} id="standard-basic" label="Name" variant="standard" />
                        <br />
                        <br />
                        <TextField onBlur={handleEmail} id="standard-basic" label="Username or Email" variant="standard" />
                        <br />
                        <br />

                        <TextField onBlur={handlePassword} id="standard-basic" label="Password" variant="standard" type='password' /> <br />


                        {
                            user && <p className='text-success text-center'>User successfully created</p>
                        }

                        {
                            error && <p className='text-danger text-center'>{error.message}</p>
                        }

                        <button className='registerBtn btn btn-success mt-4 my-2' type='submit'>Create an account</button>
                        <p className='registerAlready text-center'>Already have an account? <span> <Link to='/login'>Login</Link></span></p>




                    </Box>
                    <div className='borders'>
                        <p></p> <span> Or </span> <p></p>
                    </div>

                    <div className="socialButton">

                        <div
                            onClick={HandleGoogleSignIn}
                            className="googleBtn btn btn-outline-secondary  border-info  text-dark  "><img src={google} alt="" /><p className='pt-1'>Continue with Google</p>
                        </div>

                    </div>
                </div>



            </div>


        </div>



    );
};

export default Register;