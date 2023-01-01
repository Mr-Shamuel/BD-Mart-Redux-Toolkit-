import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import './Slider.css'
const Slider = () => {
    return (
        <div>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='slider_img  d-block mx-auto'
                    itemId={1}
                    src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80'
                    alt='...'
                >
                    <h4 className='text-light'  >Premiem watch</h4>
                    <p className='text-light'>Original branded luxuries fashion style business watches.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='slider_img  d-block mx-auto  '
                    itemId={2}
                    src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='...'
                >
                    <h4 className='text-light'>Best Headphone</h4>
                    <p className='text-light'>Find headphone in Bangladesh on Bdmart </p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='slider_img  d-block mx-auto'
                    itemId={3}
                    src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='...'
                >
                    <h4 className='text-light'>  Digital Camera  </h4>
                    <p className='text-light'>Latest Digital Camera in BD 2023 Stock is Limited</p>
                </MDBCarouselItem>
            </MDBCarousel>
        </div>
    );
};

export default Slider;