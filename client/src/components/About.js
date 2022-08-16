import React from "react";
import "./About.css";
import FooterPage from "./Footer";
import { MDBIcon } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import guest6 from "../images/guest6.jpeg";
import about7 from "../images/about7.jpg";
import guest5 from "../images/guest5.jpeg";
import teamQ from "../images/teamQ.jpg";
import team150 from "../images/team150.jpeg";
import people100 from "../images/people100.jpg";
import about1 from "../images/about1.jpg";
import about5 from "../images/about5.jpg";
import about3 from "../images/about3.jpg";
import icon1 from "../images/17-icon01.gif";
import icon2 from "../images/icon1.gif";
import icon3 from "../images/icon2.gif";
import icon4 from "../images/icon3.gif";
import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBCarouselElement,
	MDBCarouselCaption,
} from 'mdb-react-ui-kit';

const JumbotronPage = () => {
	return (
		<>
			<MDBCarousel className='mdb_carousel'>
				<MDBCarouselInner>
					<MDBCarouselItem className="active" itemId={0} showControls interval={1000}>
						<MDBCarouselElement
							className='mdb_images'
							src={guest6}
							alt='Hero'
						/>
						<MDBCarouselCaption className='mdb_caption'>
							<h2>Get to Know Us Better</h2>
						</MDBCarouselCaption>
					</MDBCarouselItem>
					<MDBCarouselItem itemId={1}  showControls interval={2000}>
						<MDBCarouselElement
							className='mdb_images'
							src={about7}
							alt='Team'
						/>
						<MDBCarouselCaption className='mdb_caption'>
							<h2>OUR CULTURE</h2>
						</MDBCarouselCaption>
					</MDBCarouselItem>
					<MDBCarouselItem itemId={2}  showControls interval={3000}>
						<MDBCarouselElement
							className='mdb_images'
							src={guest5}
							alt='Guest'
						/>
						<MDBCarouselCaption className='mdb_caption'>
							<h2>OUR CULTURE</h2>
						</MDBCarouselCaption>
					</MDBCarouselItem>
					<MDBCarouselItem itemId={3}  showControls interval={4000}>
						<MDBCarouselElement
							className='mdb_images'
							src={teamQ}
							alt='Guest'
						/>
						<MDBCarouselCaption className='mdb_caption'>
							<h2>OUR CULTURE</h2>
						</MDBCarouselCaption>
					</MDBCarouselItem>
					<MDBCarouselItem itemId={4}  showControls interval={5000}>
						<MDBCarouselElement
							className='mdb_images'
							src={team150}
							alt='Guest'
						/>
						<MDBCarouselCaption className='mdb_caption'>
							<h2>What we do</h2>
						</MDBCarouselCaption>
					</MDBCarouselItem>
				</MDBCarouselInner>
			</MDBCarousel>
			<section className='our_mission container-xxl'>
				<div className='our_mission_row row'>
					<h4>OUR MISSION</h4>
					<p>
						At Ezyflow tek our mission is to empower organizations with the
						world's best technology solutions. We ensure the highest level of
						client satisfaction through a global network of innovation, and our
						software solutions are custom-built to accommodate your domain and
						requirements. Through world-class consultation, innovative IT
						solutions and personalized client services, Ezyflow increases
						operational efficiency for organizations of all sizes.
					</p>
				</div>
				<Link to='/contact-us' className='button about_btn'>
					<Button>Contact Us</Button>
				</Link>
				<div className='social_btn'>
					<Link to='#'>
						<MDBIcon className='linkedin-in' fab icon='linkedin-in' size='4x' />
					</Link>
					<Link to='#'>
						<MDBIcon className='linkedin-in' fab icon='facebook-f' size='4x' />
					</Link>
					<Link to='#'>
						<MDBIcon className='linkedin-in' fab icon='twitter' size='4x' />
					</Link>
					<Link to='#'>
						<MDBIcon className='linkedin-in' fab icon='instagram' size='4x' />
					</Link>
				</div>
			</section>

			<section className='about container-fluid'>
				<div className='row mt-5 justify-content-lg-center'>
					<div className='about_image'>
						<img className='d-block imgs' src={people100} alt='Guest' />
					</div>
					<div className='col-md-10 about_content'>
						<h1>OUR CULTURE</h1>
						<p>
							Ezyflow tek provides an open and collaborative work environment
							that cultivates excellence and innovation. We believe in
							maintaining a stable work-life balance that enables us to do our
							best work while fulfilling family responsibilities. Our open-door
							policies and processes align with our inclusive culture and
							empower Ezyflow to share ideas openly. At Ezyflow, everyone’s
							ideas are valued, and we operate under the mantra "may the best
							idea win."
						</p>
						<div className='button'>
							<Link to='#'>
								<Button>Learn more</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className='about_section2 container-fluid'>
				<div className='row justify-content-lg-center'>
					<div className='col-md-12 about_section_content'>
						<h1>WHY EZYFLOW</h1>
						<p>
							We only offer one method: the direct, remote integration of our
							consultants into your agile teams. This approach allows to obtain
							the best collaboration, the best communication and thus gives the
							best chances to your projects. Our consultants are selected with
							the greatest care. We attach the same importance to technical
							skills as to interpersonal skills.
						</p>
						<div className='button'>
							<Link to='#'>
								<Button>Learn more</Button>
							</Link>
						</div>
					</div>
					<div className='about_image2'>
						<img className='d-block img' src={about5} alt='Guest' />
					</div>
				</div>
			</section>
			<section className='about_section3 container-md-fluid'>
				<div className='row'>
					<div className='about_section3_content1'>
						<h1>Putting our clients and their customers first</h1>
						<p>
							Our business focuses on building long-lasting and beneficial
							relationships. We work hard to understand the challenges our
							clients face and what success means to them. With this
							understanding, we are able to build teams dedicated to always
							delivering the best service.
							<br></br>
							<br></br>
							We have built our global teams to deliver exceptional support and
							professional services. We always focus on putting the client first
							in our quest to provide the best customer experience possible.
							That’s why we’re a true partner to our clients and a seamless
							extension of their business.
						</p>
					</div>
					<div className='count_page'>
						<div className='count_item1'>
							<h1>
								<CountUp start={50} end={5000} duration={15} />+
							</h1>
							<p>People</p>
						</div>
						<div className='count_item2'>
							<h1>
								<CountUp start={0} end={40} duration={15} />
							</h1>
							<p>Languages</p>
						</div>
						<div className='count_item3'>
							<h1>
								<CountUp start={50} end={1000} duration={15} />+
							</h1>
							<p>Countries serviced</p>
						</div>
					</div>
				</div>
			</section>
			<section className='about_section4 container-xxl'>
				<div className='row justify-content-lg-center'>
					<div className='about_image'>
						<img className='d-block imgs' src={about1} alt='About1' />
					</div>
					<div className='col-md-12 about_section4_content2'>
						<h1>
							Global Product Leader: Multi-national provider of IT hardware,
							software & services
						</h1>
						<p>
							EzyFlow has removed much of the operational burden by establishing
							internal structures that take care of my everyday operational
							challenges. This has allowed me to focus on more strategic
							objectives. What I appreciate most about working with Tek Experts
							is the transparency with which they run their business. I don’t
							consider them a partner, but more an extended part of my team.
						</p>
					</div>
				</div>
			</section>
			<section className='about_section5 container-md-fluid'>
				<div className='row'>
					<div className='about_section5_content3'>
						<h1>The guiding principles that define us</h1>
					</div>
					<div className='level_page container'>
						<div className='level_item1'>
							<h2>Customer First</h2>
							<div className='about_image_icon'>
								<img className='d-block' src={icon1} alt='Icon' />
							</div>
							<p>
								The customer experience is key to everything we do. We don't
								just solve support cases, we help real people resolve real
								problems to make their lives easier. We do so with patience,
								respect and professionalism.
							</p>
						</div>
						<div className='level_item2'>
							<h2>Knowledge Matters</h2>
							<div className='about_image_icon'>
								<img className='d-block' src={icon2} alt='Icon' />
							</div>
							<p>
								We recognize sharing knowledge and expertise benefits everyone.
								We help and advise our colleagues so we can all achieve more and
								be better at what we do. All of which means a better service for
								our clients and their customers.
							</p>
						</div>
						<div className='level_item3'>
							<h2>Stronger Together</h2>
							<div className='about_image_icon'>
								<img className='d-block' src={icon3} alt='Icon' />
							</div>
							<p>
								Collaboration and support is critical to how we develop as a
								team and is integral to our success. We support our colleagues
								whenever and wherever they are, because we recognize a team is
								more than just a group of individuals.
							</p>
						</div>
						<div className='level_item4'>
							<h2>The Extra Mile</h2>
							<div className='about_image_icon'>
								<img className='d-block' src={icon4} alt='Icon' />
							</div>
							<p>
								We aim to excel in every interaction we have with our clients,
								their customers and our colleagues. We go the extra mile when
								supporting new projects and facing challenges, because we take
								pride in exceeding expectations.
							</p>
						</div>
					</div>
					<div className='about_section5_content5'>
						<h1>Talent for the long-term</h1>
						<p>
							Tek Experts is a business built on expertise, excellence and
							partnerships. Our belief in the power of great customer service
							and a client first approach is what drives us to be the best we
							can be. Our global team of experts is growing rapidly and spans
							five continents. But we share a single vision: to be at the side
							of our customers as they make a difference in the world.
							<br></br>
							<br></br>
							We’re known as a place where people grow and develop, and have
							built a reputation for investing in our talent for the long-term.
							In an industry where expertise is essential to the customer
							experience, retaining our top talent is crucial. That’s why we
							believe in rewarding great performance, offering opportunities for
							people to grow within our organization and fostering an
							environment where collaboration and support are part of our unique
							family culture. This approach is crucial to our success and has
							made us the business we are today and the business we will be in
							the future.
						</p>
					</div>
				</div>
			</section>
			<section className='about_section6 container-xxl'>
				<div className='row justify-content-lg-center'>
					<div className='col-md-12 about_section6_content6'>
						<h1>Head of Customer Care Programs: Global IT company</h1>
						<p>
							Our partnership with Ezyflow Technology was essential to the
							smooth roll out of our worldwide customer care program. They
							quickly and professionally took responsibility for sourcing
							experts in 3 geographies and supporting customers across multiple
							locations, and as a result made sure we were able to meet our
							highly ambitious targets. <br />
							<br />
							They are great at adapting to changes in processes and remits,
							quickly and effectively. The services they provide are focused on
							delivering a great experience and ensuring our customers are
							always happy.
						</p>
					</div>
					<div className='about_image6'>
						<img className='d-block imgs' src={about3} alt='About1' />
					</div>
				</div>
			</section>
			<FooterPage />
		</>
	);
};

export default JumbotronPage;
