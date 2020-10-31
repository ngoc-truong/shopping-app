import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
	return (
		<Link className="link" to={`/products/${product.id}`}>
			<div className="card" key={product.key}>
				<img src={product.images[0]} alt={product.name} />
				<h5>{product.name}</h5>
				<p>€ {product.price}</p>
				<p><span>Nur online</span></p>
				<p>Wolle</p>
			</div>
		</Link>
		
	)
};

export default ProductCard;