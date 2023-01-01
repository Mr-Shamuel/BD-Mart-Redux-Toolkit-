import React from 'react';
import ProductsList from '../ProductsList/ProductsList';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid row p-0">
                {/* <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div> */}

                <div className="col-md-12">

                    <ProductsList></ProductsList>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;