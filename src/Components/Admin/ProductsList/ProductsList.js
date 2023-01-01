import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';

const ProductsList = () => {
    const items = useSelector((state) => state.cartData.items);
    return (
        <div>
            <div className="container-fluid row p-0">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10 clients">

                    <h4 className="py-2 text-info"> All Products {items.length}</h4>
                    {/* <table className="table table-hover" > */}
                    <table className="table table-borderless table-hover">

                        <thead>
                            <tr className="bg-info text-light">

                                <th className="text-light " scope="col">Id</th>
                                <th className="text-light" scope="col">Products Name</th>
                                <th className="text-light" scope="col">Category</th>
                                <th className="text-light" scope="col">Price</th>
                                <th className="text-light" scope="col">Stock</th>
                                <th className="text-light" scope="col">Seller</th>
                            </tr>
                        </thead>

                        <tbody className="text-none">
                            {


                                items.map((item, index) => {
                                    const { id, title, img, price, category, stock, seller } = item;
                                    console.log(id)
                                    return (
                                        <tr className="table table-borderless" >

                                            <td className="text-dark"> {id}</td>
                                            <td className="text-dark">  <img height={"30px"} src={img} alt="" /> {title.slice(0, 15)}</td>
                                            <td className="text-dark"> {category}</td>
                                            <td className="text-dark">$ {price}</td>
                                            <td className="text-dark"> {stock}</td>
                                            <td className="text-dark"> {seller}</td>

                                        </tr>

                                    )
                                }


                                )


                            }
                        </tbody>

                    </table>



                </div>

            </div>
        </div>
    );
};

export default ProductsList;