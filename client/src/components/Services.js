import React from "react";
import "./Services.css";
import CountUp from "react-countup";
import Service1 from "../images/service1.jpeg";
import tek1 from "../images/tek1.gif";
import tek2 from "../images/tek2.gif";
import tek3 from "../images/tek3.gif";
import tek4 from "../images/tek4.gif";
import tek5 from "../images/tek5.gif";
import testim4 from "../images/testim4.jpg";
import testimo1 from "../images/testimo1.png";
import soft2 from "../images/soft2.jpg";
import testimo4 from "../images/testimo4.png";
import testimo from "../images/testimo.png";
import testimo2 from "../images/testimo2.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterPage from "./Footer";
import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBCarouselElement,
} from "mdb-react-ui-kit";

function Services() {
	return (
		<>
			<section className='service_section'>
				<div className='row service_row'>
					<div className='service_section_content container'>
						<h1>
							We help other technology company partners to <br />
							deliver, scale and optimize their business.
						</h1>
						<h2>
							Access our expertise on Azure, Dynamics and Microsoft <br />
							365 to support the success of your business.
						</h2>
						<Link to='/' className='service_button'>
							<Button>READY TO FOCUS ON WHAT YOU DO BEST</Button>
						</Link>
					</div>
				</div>
			</section>
			<section className='service_section2'>
				<p className='section2_about_us'> About Us</p>
			</section>
			<section className='service_section3'>
				<div className='row'>
					<div className='section3_service_content  animate__animated animate__slideInUp animate__delay-3s'>
						<h1>
							EzyFlow Tek
							<br /> Professional <br />
							Services.
						</h1>
						<p>
							We can help you focus on your core business, extend your
							capabilities, reach new locations and deliver on fresh market
							opportunities. We do this by providing access to the right skills,
							when you need them, effortlessly.
						</p>
					</div>
					<div className='service_image1 animate__animated animate__slideInRight animate__delay-3s'>
						<img className='d-block' src={Service1} alt='Services1' />
					</div>
				</div>
			</section>

			<section className='service_section4'>
				<div className='row'>
					<h1>We enable our partners to:</h1>
					<div className='section4__service_content'>
						<div className='list_item1'>
							<h2>Scale</h2>
							<p>Deliver more of what works</p>
						</div>
						<div className='list_item2'>
							<h2>Optimize</h2>
							<p>Focus on business priorities</p>
						</div>
						<div className='list_item3'>
							<h2>Bridge</h2>
							<p>Add new capabilities</p>
						</div>
						<div className='list_item4'>
							<h2>Extend</h2>
							<p>Grow their regional presence</p>
						</div>
					</div>
				</div>
			</section>
			<section className='service_section5'>
				<div className='row'>
					<h3 className='service_offer'>Our Service Offering</h3>
					<h1 className='end_partner'>End to end partner enablement</h1>
					<div className='service_section5_content'>
						<div className='service_section5_image'>
							<img src={tek3} alt='Tek' />
							<h3>Consulting</h3>
						</div>
						<div className='service_section5_image'>
							<img src={tek2} alt='Tek' />
							<h3>Implementation</h3>
						</div>
						<div className='service_section5_image'>
							<img src={tek1} alt='Tek' />
							<h3>
								Technology
								<br /> Training
							</h3>
						</div>
						<div className='service_section5_image'>
							<img src={tek4} alt='Tek' />
							<h3>
								Managed <br />
								Services
							</h3>
						</div>
						<div className='service_section5_image'>
							<img src={tek5} alt='Tek' />
							<h3>
								Technology <br />
								Support for
								<br /> partners
							</h3>
						</div>
					</div>
				</div>
			</section>
			<section className='service6'>
				<h2>100% Partner Focused Multilingual Team</h2>
				<div className='service_count_page'>
					<div className='service_count_item'>
						<h1>
							<CountUp start={0} end={351} duration={15} />+
						</h1>
						<p>Software Engineers</p>
					</div>
					<div className='service_count_item'>
						<h1>
							<CountUp start={0} end={765} duration={15} />+
						</h1>
						<p>Network Engineers</p>
					</div>
					<div className='service_count_item'>
						<h1>
							<CountUp start={0} end={845} duration={15} />+
						</h1>
						<p>Dynamic/Microsoft 365 engineers</p>
					</div>
				</div>
			</section>
			<section>
				<MDBCarousel className='service_carousel'>
					<MDBCarouselInner>
						<MDBCarouselItem className='active' itemId={0}  showControls interval={0}>
							<MDBCarouselElement
								className='mdb_carousel_service_image'
								src={testim4}
								alt='Dev1'
							/>
							<div className='service_carousel_content'>
								<h1>
									Stella Nyagah <br />
									Microsoft
								</h1>
								<br />
								<br />
								<p>
									The only way people can leverage technology is if they
									understand it, and Tek Experts is well on its way towards
									helping people better understand how to effectively utilize
									technology to gain an advantage in business. Tek Experts has
									proven to us that they are not just a great resource but an
									amazing professional service partner.
								</p>
							</div>
						</MDBCarouselItem>

						<MDBCarouselItem className='carouse_flow' itemId={1}  showControls interval={200}>
							<MDBCarouselElement
								className='mdb_carousel_service_image'
								src={testimo1}
								alt='Dev3'
							/>
							<div className='service_carousel_content'>
								<h1>
									George Samuel <br />
									AWS Engineer
								</h1>
								<br />
								<br />
								<p>
									The only way people can leverage technology is if they
									understand it, and Tek Experts is well on its way towards
									helping people better understand how to effectively utilize
									technology to gain an advantage in business. Tek Experts has
									proven to us that they are not just a great resource but an
									amazing professional service partner.
								</p>
							</div>
						</MDBCarouselItem>
						<MDBCarouselItem className='carouse_flow' itemId={2}  showControls interval={300}>
							<MDBCarouselElement
								className='mdb_carousel_service_image'
								src={soft2}
								alt='Dev2'
							/>
							<div className='service_carousel_content'>
								<h1>
									Leonard George <br />
									Software Engineer
								</h1>
								<br />
								<br />
								<p>
									The only way people can leverage technology is if they
									understand it, and Tek Experts is well on its way towards
									helping people better understand how to effectively utilize
									technology to gain an advantage in business. Tek Experts has
									proven to us that they are not just a great resource but an
									amazing professional service partner.
								</p>
							</div>
						</MDBCarouselItem>
					</MDBCarouselInner>
				</MDBCarousel>
			</section>
			<section className='service_section8'>
				<div className='row'>
					<div className='col-md-12 service_section8_content'>
						<h1>
							Consulting & <br />
							Implementation
						</h1>
						<p>Examples of our partner engagements:</p>
						<ul>
							<li>Proof of concept for a telco company</li>
							<li>Migration to Azure Cloud for a state-owned bank</li>
							<li>Database migration for a large FSI player</li>

							<li>Infrastructure optimization for a multi-industry company</li>

							<li>Microsoft 365 implementation for a bank</li>
							<li>
								PowerApps development and implementation for an IT service
								company
							</li>
							<li>Dynamics implementation for an automotive company</li>
						</ul>
					</div>
					<div className='service_section8_image'>
						<img src={testimo4} alt='Testmo1' />
					</div>
				</div>
			</section>
			<section className='service_section9'>
				<div className='row'>
					<img src={testimo} alt='Tek2' />
					<div className='service_section9_content'>
						<h1>
							Training Partners
							<br /> and End Customers
						</h1>
						<p>Examples of our partner engagements:</p>
						<ul>
							<li>Partner training bootcamps on Azure technology</li>
							<li>
								Partner training bootcamps on Power Apps and Customer Insights
							</li>

							<li>Cyber Security and Azure for a Government</li>
						</ul>
					</div>
				</div>
			</section>
			<section className='service_section10'>
				<div className='row'>
					<div className='service_section10_content'>
						<h1>Managed Services</h1>
						<p>Examples of our partner engagements:</p>
						<ul>
							<li>
								Dynamics managed services for a global multi-industry company
							</li>
						</ul>
					</div>
					<img src={testimo2} alt='Testimo2' />
				</div>
			</section>
			<section></section>
			<FooterPage />
		</>
	);
}

export default Services;
