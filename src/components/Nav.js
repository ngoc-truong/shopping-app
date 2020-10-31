import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
	return (
		<nav>
			<div className="logo">
				<Link to="/">NOG</Link>
			</div>
			<div className="navigation">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/products">Products</Link></li>
					<li><Link to="/cart">Cart</Link></li>
					<FontAwesomeIcon icon={faShoppingBag} />
				</ul>
			</div>
		</nav>
	)
}

export default Nav;