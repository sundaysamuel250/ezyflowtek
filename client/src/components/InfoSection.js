import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import guest from "../images/guest.jpeg";
import consult from "../images/consult.png";
import web1 from "../images/web1.svg";
import web3 from "../images/web3.svg";
import web4 from "../images/web4.svg";
import web5 from "../images/web5.svg";
import mash from "../images/mash.png";

function InfoSection() {
	return (
		<>
			<section className='container-xxl'>
				<div className='container-para '>
					<p>
						Ezyflow Tek provides the perfect blend of people and technology. We
						develop software solutions that enable our people to deliver
						exceptional services on behalf of our clients. We believe technology
						should be an enabler; provide timely data and insight that equips
						our front-line teams to better serve customers anywhere in the
						world. Take a moment to look around; consider the exceptional
						services we offer, understand the values we hold dear and the
						long-term career opportunities available on offer across five
						continents; from technical support and professional services, to
						sales support and customer account management. You can also find out
						about what’s going on in each of our regions and why our people are
						so important to us.
					</p>
				</div>
			</section>
			<section className='who_we_are'>
				<div className='row'>
					<div className='weAre'>
						<h1>Who we are</h1>
						<br />
						<p>
							Ezyflow Tek provides digital services and solutions to empower our
							clients to achieve more. With global product and engineering
							teams, we can help transform your ideas to reality. We are driven
							to make lives better through innovation. Our top priorities are
							solving problems, helping streamline operations, reducing
							inequities and driving economic growth for our clients by creating
							the best solutions.
						</p>

						<div className='button'>
							<Link to='/'>
								<Button>Learn more</Button>
							</Link>
						</div>
					</div>
					<div className='my_image'>
						<img className='d-block imgs' src={guest} alt='Guest' />
					</div>
				</div>
			</section>
			<section className='new'>
				<div className='second_new'>
					<h1>WE HELP YOU ACHIEVE MORE</h1>
					<p>
						Ezyflow empowers you with world-class, custom software solutions.
					</p>
				</div>
			</section>
			<section className=' container-small complete-container'>
				<div className='container'>
					<div className='col-container'>
						<img src={consult} alt='' />
						<div className='col-md-12'>
							<h2>STRATEGIC CONSULTING</h2>
							<p>
								Combining technical expertise and robust industry knowledge, we
								develop diverse custom solutions for small, medium and
								enterprise-level businesses.
							</p>
						</div>
					</div>
					<div className='col-container'>
						<img src={web1} alt='Web1' />
						<div className='col-md-12'>
							<h2>USER EXPERIENCE</h2>
							<p>
								We collaborate with your team on stakeholder interviews,
								usability testing, task/decision workflows, wire-frames and
								clickable prototypes to align with the complex interdependencies
								presented by modern businesses.
							</p>
						</div>
					</div>
					<div className='col-container'>
						<img src={web3} alt='Web53' />
						<div className='col-md-12'>
							<h2>PROJECT MANAGEMENT</h2>
							<p>
								As your resource coordinators and contact points, our project
								managers map the scope of your software build, forecast progress
								and section tasks into managed releases that align with your
								schedule and project cost goals.
							</p>
						</div>
					</div>
					<div className='col-container'>
						<img src={web4} alt='Web4' />
						<div className='col-md-12'>
							<h2>WEB DEVELOPMENT</h2>
							<p>
								Our custom web development offers options for businesses seeking
								flexible, consistent user experiences across platforms.
								Leveraging innovative approaches to web development, including
								progressive web apps, we combine frontend, backend and
								architecture capabilities to accommodate your business needs and
								maximize delivery speed.
							</p>
						</div>
					</div>
					<div className='col-container'>
						<img src={web5} alt='Web5' />
						<div className='col-md-12'>
							<h2>MOBILE DEVELOPMENT</h2>
							<p>
								With experience in the range of development from pure native to
								cross-platform apps, we help you determine the best option for
								your project requirements.
							</p>
						</div>
					</div>
					<div className='col-container'>
						<img src={mash} alt='Mash' />
						<div className='col-md-12'>
							<h2>QUALITY ASSURANCE</h2>
							<p>
								We work with your team to identify, fix and prevent software
								quality issues through a customized combination of manual
								testing, compatibility testing, performance testing, automation
								engineering and continuous integration.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default InfoSection;
