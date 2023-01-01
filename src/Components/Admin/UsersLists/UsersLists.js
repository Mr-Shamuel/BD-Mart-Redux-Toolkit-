import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Sidebar from '../Sidebar/Sidebar';

const UsersLists = () => {
    const [users, setUsers] = useState([]);
    //geting Data
    const GetData = () => {
        axios.get('https://63ac4337da81ba97617eebed.mockapi.io/users')
            .then(res => setUsers(res.data))
    }
    useEffect(() => {
        GetData();
    }, [])



    // delete users 
    // delete users
    const handleDlete = (id) => {
        axios.delete(`https://63ac4337da81ba97617eebed.mockapi.io/users/${id}`)
            .then(res => {
                //window.location.reload()

                GetData();
                toast.success('Delete Successfull', {
                    position: "bottom-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

            })


    }
    return (
        <div>
            <div className="container-fluid row p-0 vh-100">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10 clients">

                    <h4 className="py-2 text-info"> All Users {users.length}</h4>
                    {/* <table className="table table-hover" > */}
                    <table className="table table-borderless table-hover">

                        <thead>
                            <tr className="bg-info text-light">

                                <th className="text-light " scope="col">Id</th>
                                <th className="text-light" scope="col">Name</th>
                                <th className="text-light" scope="col">Email</th>
                                <th className="text-light" scope="col">Action</th>
                            </tr>
                        </thead>

                        <tbody className="text-none">
                            {


                                users.map((user, index) => {
                                    const { id, name, email } = user;

                                    return (
                                        <tr className="table table-borderless" >
                                            <td className="text-dark"> {id}</td>
                                            <td className="text-dark"> {name}</td>
                                            <td className="text-dark"> {email}</td>
                                            <td><button onClick={() => handleDlete(id)} className='btn btn-danger'>Delete</button></td>

                                        </tr>

                                    )
                                }


                                )


                            }
                        </tbody>

                    </table>



                </div>

            </div>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                limit={3}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default UsersLists;