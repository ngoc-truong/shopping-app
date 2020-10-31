import React, { useEffect, useState } from "react";
import { discover } from "../data/discover";

const Discover = () => {
	const [urls, setUrls] = useState([]);

	useEffect(() => {
		setUrls(discover);
	}, []);

	return (
		<div className="discover">
			<hr />
			<h5 className="divider-title">Es gibt noch mehr zu entdecken</h5>
			<div className="discover-container">
				<div className="discover-card">
					<img src={urls[0]} alt="" />
					<h5>Kleider für den Winter</h5>
					<a href="/">Jetzt entdecken</a>
				</div>
				<div className="discover-card">
					<img src={urls[1]} alt="" />
					<h5>Schuhe für die neue Saison</h5>
					<a href="/">Damen</a>
					<a href="/">Herren</a>
				</div>
				<div className="discover-card">
					<img src={urls[2]} alt="" />
					<h5>NOG Magazin</h5>
					<a href="/">Mehr erfahren</a>
				</div>
				<div className="discover-card">
					<img src={urls[3]} alt="" />
					<h5>Für die Freizeit</h5>
					<a href="/">Damen</a>
					<a href="/">Herren</a>
				</div>
			</div>
			<hr />
		</div>
	)
}

export default Discover;