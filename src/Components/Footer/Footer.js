import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="footer bg-dark text-light py-5 px-2">
            <div className="row">
                <div className="col-md-4 col-sm-12 ">
                    <div className="social pb-3">
                        <h3>Follow us</h3>

                        <a target="_blank" bla href="http://facebook.com/" rel="noreferrer" ><FacebookOutlinedIcon className=""></FacebookOutlinedIcon></a>
                        <a target="_blank" href="http://twitter.com/" rel="noreferrer" ><TwitterIcon className="text-info"></TwitterIcon></a>
                        <a target="_blank" href="http://instagram.com/" rel="noreferrer" ><InstagramIcon className="text-danger"></InstagramIcon></a>


                    </div>
                    <p>&nbsp;©Copyright {(new Date()).getFullYear()}, BDMart.com : All Rights Reserved.</p>
                    <p>Privacy Policy&nbsp;&nbsp;Terms of Service &nbsp;&nbsp; </p>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="social pb-3">
                        <h3>Customer Service</h3>
                        <Link href="#" > <WhatsAppIcon className="text-success"></WhatsAppIcon></Link> <h5>01303001354</h5>
                        <h6>How it works?</h6>
                        <h6>FAQ</h6>


                    </div>

                </div>
                <div className="col-md-4 col-sm-12">
                    <div className=" pb-3">
                        <h3>About</h3>
                        <p>Experience Personalized Online Shopping in Bangladesh with BdMart.com</p>

                        <button className="btn btn-primary">Join our Website Today <DoubleArrowIcon></DoubleArrowIcon></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;