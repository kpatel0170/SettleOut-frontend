import React, { useState, useEffect } from 'react';
import './Footer.css';


const Footer = () => {
return (

<footer className="footer-distributed">

			<div className="footer-left">

				<h3>Settle<span>Out</span></h3>

				<p className="footer-links">
					<a href="/Home" className="link-1">Home</a>
					
					<a href="/Blog">Blog</a>
				
					<a href="/Pricing">Pricing</a>
				
					<a href="/About">About</a>
					
					<a href="?Faq">Faq</a>
					
					<a href="/Contact">Contact</a>
				</p>

				<p className="footer-company-name">SettleOut © 2023</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>University of Regina</span> Regina, Canada</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@settleout.com">support@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
                    We are here to help you settle down in your new life in Regina!
                    				</p>

				
			</div>

		</footer>

);
};

export default Footer;