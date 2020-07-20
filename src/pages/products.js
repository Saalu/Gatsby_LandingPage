import React, { Component } from 'react';
import Layout from '../components/Layouts';
import styles from '../components/products.module.css';

export class products extends Component {
	render() {
		return (
			<Layout>
				<div className={styles.page}>
					<h3 className={styles.heading}>Products page</h3>
					<ul className={styles.list}>
						<li>Mango</li>
						<li>Banana</li>
						<li>Pineapple</li>
					</ul>
				</div>
			</Layout>
		);
	}
}

export default products;
