import React, { useEffect, useState }from "react";
import { pictures } from "../data/home";

const Home = () => {
	const [urls, setUrls] = useState([]);

	useEffect(() => {
		setUrls(pictures);
	}, []);

	return (
		<div className="home-container">
			<div className="first-row">
				<div className="first-text text">
					<h4>DIE GARDEROBEN-SERIE</h4>
					<h2>30% auf ausgewählte Strickmode</h2>
					<p>Nur dieses Wochenende. Online und in den Stores</p>
					<button>Damen</button>
					<button>Herren</button>
				</div>
				<img src={urls[0]} alt="" />
			</div>
			<div className="second-row">
				<div className="second-text text">
					<h1>Langlebige Outerwear</h1>
					<p>Vielseitige Modelle für jede Saison</p>
					<button>Damen</button>
					<button>Herren</button>
				</div>
				<img src={urls[1]} alt="" />
			</div>
			<div className="third-row">
				<div className="third-text text">
					<h1>NOG Kashmir</h1>
					<p>Kuscheln Sie sich in das luxuriöseste Material des Winters</p>
					<button>Damen</button>
					<button>Herren</button>
				</div>
				<img src={urls[2]} alt="" />
				<img src={urls[3]} alt="" />
			</div>
		</div>
	)
};

export default Home;