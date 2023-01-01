import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import google from '../../../icon/google.png';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebaseConfig';
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    const [signInWithEmailAndPassword, user1, loading1, error1,] = useSignInWithEmailAndPassword(auth);
    const handleSubmit = (e) => {
        signInWithEmailAndPassword(email, password)


        console.log(error1)
        e.preventDefault();
    }

    //google signing
    const [GoogleSignIn] = useSignInWithGoogle(auth);


    const location = useLocation();
    const form = location?.state?.from?.pathname || '/';

    const HandleGoogleSignIn = () => {
        GoogleSignIn()
            .then(() => {
                navigate(form, { replace: true })
                // navigate(form, { replace: true })
            })
    }
    //spinner
    if (loading1) {
        return <div className="spinner-border text-danger text-center d-block mx-auto mt-5 " role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    //user
    if (user1) {


        navigate(form, { replace: true })

    }

    return (
        <div>




            <div className='register mt-5 vh-100 '>
                <div>

                    <Box className='registerCon'
                        onSubmit={handleSubmit}
                        component="form"
                        sx={{
                            '& > :not(style)': { mx: 3, my: 2, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <h4>Login</h4>


                        <TextField
                            onBlur={handleEmail}
                            id="standard-basic" label="Username or Email" variant="standard" />
                        <br />
                        <br />

                        <TextField
                            onBlur={handlePassword}
                            id="standard-basic" label="Password" type='password' variant="standard" /> <br />


                        {
                            error1 && <p className='text-danger text-center'>{error1.message}</p>
                        }

                        <button className='registerBtn btn btn-primary mt-4 my-2' type='submit'>Login</button>
                        <p className='registerAlready text-center'>Don't have an account? <span> <Link to='/register'>Create an account</Link></span></p>




                    </Box>
                    <div className='borders'>

                        <p></p> <span> Or </span> <p></p>

                    </div>


                    <div className="socialButton">
                        <br />
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

export default Login;