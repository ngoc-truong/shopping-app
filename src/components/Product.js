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
		<div className="product">
			<div className="images-container">
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
			<div className="product-details">
				<h3>{item.name}</h3>
				<p>€{item.price}</p>

				<h5><span>BESCHREIBUNG</span></h5>
				<p>{item.description}</p>
				<button>Zum Warenkorb hinzufügen</button>
			</div>
		</div>
	)
};

export default Product;