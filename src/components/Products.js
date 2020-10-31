import React from "react";
import { products } from "../data/data";

const Products = () => {
	return (
		<>
			<div className="product-card">
				{products.map((product) => {
					return (
						<div key={product.id}>
							<img src={product.images[0]} alt={product.name} />
							<h1>{product.name}</h1>
							<p>{product.price}€</p>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Products;