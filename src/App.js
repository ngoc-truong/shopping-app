import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div id="container">
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/products" component={Products} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/products/:id" component={Product}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
