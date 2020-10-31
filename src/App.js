import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/products" component={Products} />
				<Route exact path="/cart" component={Cart} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
