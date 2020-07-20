import React, { Fragment } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './layout.css';
const layouts = ({ children }) => {
	return (
		<Fragment>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</Fragment>
	);
};

export default layouts;
