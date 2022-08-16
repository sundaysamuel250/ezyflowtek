import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import guest300 from "../images/guest300.jpeg";

function OurTeam() {
	return (
		<div>
			<section className='our_team'>
				<div className='row'>
					<div className='our-image'>
						<img className='d-block img' src={guest300} alt='Guest' />
					</div>
					<div className='col-12 our_team_content'>
						<h1>JOIN OUR TEAM</h1>
						<p>
							Come solve complex problems with a global team of technologists,
							designers, architects, developers and quality assurance analysts.
						</p>
						<div className='button'>
							<Link to='joinus'>
								<Button>Join us</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default OurTeam;
