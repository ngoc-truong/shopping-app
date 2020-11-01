import React, { useEffect, useState } from "react";
import { products } from "../data/data";

const Product = ({ match, onAddToCart }) => {
	const [item, setItem] = useState({});
	const [num, setNum] = useState(1);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const [ product ] = await products.filter(product => Number(product.id) === Number(match.params.id));
		setItem(product);
	}

	const onNumChange = (event) => {
		setNum(event.target.value);
	}

	return (
		<div className="product">
			<div className="images-container">
				{/* 
					When Product renders the first time, it seems there is not an item, therefore images are not displayed
					Solution from here: 
					https://stackoverflow.com/questions/52141607/map-function-error-cannot-read-property-map-of-undefined-in-reactjs
				*/}
				{( item.images || [] ).map(image => {
					return (
						<img 
							key={image} 
							src={image} 
							alt="" 
						/>
					)
				})}
			</div>
			<div className="product-details">
				<h3>{item.name}</h3>
				<p>€{item.price}</p>

				<h5><span>BESCHREIBUNG</span></h5>
				<p>{item.description}</p>
				<form>
					<label>
						Anzahl: 
						<input
							type="number"
							value={num}
							onChange={onNumChange}
							min="1"
						>
						</input>
					</label>
				</form>
				<button onClick={() => onAddToCart({...item, num: num})}>
					Zum Warenkorb hinzufügen
				</button>
			</div>
		</div>
	)
};

export default Product;