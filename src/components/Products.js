import React, { useEffect, useState } from "react";
import { products } from "../data/data";
import ProductCard from "./ProductCard";

const Products = () => {
	const [coats, setCoats] = useState([]);

	useEffect(() => {
		setCoats(products);
	}, []);

	return (
		<div className="cards-container">
			{coats.map((coat) => {
				return <ProductCard key={coat.id} product={coat} />
			})}
		</div>
	)
}

export default Products;