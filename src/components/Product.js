import React, { useEffect, useState } from "react";
import { products } from "../data/data";

const Product = ({ match }) => {
	const [item, setItem] = useState({});

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const [ product ] = await products.filter(product => Number(product.id) === Number(match.params.id));
		setItem(product);
	}

	return (
		<div>
			<h1>{item.name}</h1>
			<p>€{item.price}</p>
			<p>{item.description}</p>

			{/* 
				When Product renders the first time, it seems there is not item, therefore images are not displayed
				Solution from here: 
				https://stackoverflow.com/questions/52141607/map-function-error-cannot-read-property-map-of-undefined-in-reactjs
			*/}
			{( item.images || [] ).map(image => {
				return (
					<img src={image} alt="" />
				)
			})}
		</div>
	)
};

export default Product;