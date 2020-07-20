import React from 'react';
import Layout from '../components/Layouts';
import styles from '../components/blog.module.css';
const blog = () => {
	return (
		<Layout>
			<div className={styles.page}>
				<h2>my first blog post</h2>
				<p className="post">
					<h3>this is blog</h3>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa voluptates eaque architecto,
					dolore totam impedit illo ipsam ipsum iusto ex eveniet! Ipsam, ut consequatur.
				</p>
			</div>
		</Layout>
	);
};

export default blog;
