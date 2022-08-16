import React from "react";
import { Button } from "react-bootstrap";
import InfoSection from "./InfoSection";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Slider";
import OurTeam from "./OurTeam";
import FooterPage from "./Footer";

function Home() {
	return (
		<>
			<div className='home-banner'>
				<div className='container-sm banner-content'>
					<h1>
						Here we are, to take your business <br />
						and career to new level through <br /> technology.
					</h1>
					<p>
						Ezyflow Tek empowers clients with world-class, <br />
						custom software solutions to solve the most
						<br /> complicated challenges.
					</p>
					<Link to='/' className='button'>
						<Button>Learn more</Button>
					</Link>
				</div>
			</div>
			<InfoSection />
			<Slider />
			<OurTeam />
			<FooterPage />
		</>
	);
}

export default Home;
