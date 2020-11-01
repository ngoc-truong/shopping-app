import React from "react";

const Cart = ({ addedItems, increment, decrement }) => {
	const calcSum = (items) => {
		let sum = 0;

		items.forEach(item => {
			sum = sum + (Number(item.price) * Number(item.num));
		});

		return sum;
	};

	const onPurchase = () => {
		alert("Danke für den Einkauf bei NOG. Du wirst fantastisch aussehen!");
	};

	return (
		<div className="cart-container">
			<div className="product-summary">
				<h5>ARTIKEL IM WARENKORB ({ addedItems.length })</h5>
				{addedItems.map(item => {
					return (
						<div key={item.id} className="product-preview">
							<img src={item.images[0]} alt="" />
							<div>
								<p>{item.name}</p>
								<p>{item.price}€</p>
								<p>Größe: 44 </p>
								<p>Farbe: Marine</p>
								<p>Anzahl: 
									<button className="change-num-button" onClick={() => decrement(item.id)}>-</button>
										{item.num}
									<button className="change-num-button" onClick={() => increment(item.id)}>+</button>
								</p>
								
							</div>
						</div>
					)
				})}
			</div>
			<div className="overview">
				<h5>BESTELLÜBERSICHT</h5>
				<table>
					<tbody>
						<tr>
							<td>Bestellsumme</td>
							<td className="right">{calcSum(addedItems)} €</td>
						</tr>
						<tr>
							<td>Lieferung</td>
							<td className="right">Kostenlos</td>
						</tr>
						<tr>
							<td>Haben Sie einen Gutschein?</td>
							<td className="right">Nein</td>
						</tr>
					</tbody>
				</table>
				<h5>GESAMT: {calcSum(addedItems)} €</h5>
				<button onClick={onPurchase}>ZUR KASSE</button>
			</div>
		</div>
	)
};

export default Cart;