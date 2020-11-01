import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	const [addedItems, setAddedItems] = useState([]);

	const onAddToCart = (object) => {
		const alreadyInCart = addedItems.some((item) => Number(item.id) === Number(object.id));

		if (alreadyInCart) {
			let targetItem = findTargetItem(object.id);
			let restItems = findRestItems(object.id);
			
			targetItem.num = Number(targetItem.num) + Number(object.num);

			let items = [...restItems, targetItem].sort((a, b) => a.id < b.id);

			setAddedItems(items);
		} else {
			let items = [...addedItems, object].sort((a, b) => a.id < b.id);
			setAddedItems(items);
		}
		alert(`${object.name} zum Warenkorb hinzugefügt`);
	};

	const increment = (id) => {
		let targetItem  = findTargetItem(id);
		let restItems = findRestItems(id);

		targetItem.num = Number(targetItem.num) + 1;

		let items = [...restItems, targetItem].sort((a, b) => a.id < b.id);
		setAddedItems(items);
	};

	const decrement = (id) => {
		let targetItem  = findTargetItem(id);
		let restItems = findRestItems(id);
		
		if (Number(targetItem.num) > 0){
			targetItem.num = Number(targetItem.num) - 1;
		}

		let items = [...restItems, targetItem].sort((a, b) => a.id < b.id);
		setAddedItems(items);
	};

	// Helper functions
	const findTargetItem = (id) => {
		const [ targetItem ] = addedItems.filter(item => Number(item.id) === Number(id));
		return targetItem;
	};

	const findRestItems = (id) => {
		const restItems = addedItems.filter((item) => Number(item.id) !== Number(id));
		return restItems;
	};

	return (
		<BrowserRouter>
			<div id="container">
				<Nav addedItems={addedItems}/>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/products" component={Products} />
					<Route 
						exact path="/cart" 
						render={(props) => <Cart {...props} 
												addedItems={addedItems} 
												increment={increment}
												decrement={decrement}
											/>}					
					/>
					<Route 
						exact path="/products/:id" 
						render={(props) => <Product {...props} onAddToCart={onAddToCart} />}
					/>
				</Switch>
				<Discover />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
