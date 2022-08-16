import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import pix1 from "../images/pix1.jpeg";
import pix10 from "../images/pix10.jpeg";
import pix3 from "../images/pix3.jpeg";
import pix4 from "../images/pix4.jpeg";
import pix5 from "../images/pix5.jpeg";
import pix6 from "../images/pix6.jpeg";
import pix12 from "../images/pix12.jpeg";
import pix8 from "../images/pix8.jpeg";

function Slider() {
	return (
		<div className='slide_page'>
			<div className='row'>
				<div className='content_team'>
					<p>
						EzyFlow Tek Provides The Perfect Blend Of People And Technology. We
						Develop Software Solutions That Enable Our People To Deliver
						Exceptional Services On Behalf Of Our Clients. We Believe Technology
						Should Be An Enabler;
					</p>
					<h2>EzyFlow Technology TEAM</h2>
					<div className='button pt-3'>
						<Link to='/'>
							<Button>Learn more</Button>
						</Link>
					</div>
				</div>

				<Carousel slide={true} className='slide col-md-12'>
					<Carousel.Item className='slide_image' data-interval='1000'>
						<img className='d-block' src={pix1} alt='First slide' />
					</Carousel.Item>

					<Carousel.Item className='slide_image' data-interval='2000'>
						<img className='d-block' src={pix10} alt='Second slide' />
					</Carousel.Item>
					<Carousel.Item className='slide_image' data-interval='3000'>
						<img className='d-block' src={pix3} alt='Third slide' />
					</Carousel.Item>

					<Carousel.Item className='slide_image' data-interval='4000'>
						<img className='d-block' src={pix4} alt='Fourth slide' />
					</Carousel.Item>

					<Carousel.Item className='slide_image' data-interval='5000'>
						<img className='d-block' src={pix5} alt='fifth slide' />
					</Carousel.Item>

					<Carousel.Item className='slide_image' data-interval='6000'>
						<img className='d-block' src={pix6} alt='Third slide' />
					</Carousel.Item>

					<Carousel.Item className='slide_image' data-interval='7000'>
						<img className='d-block' src={pix12} alt='Third slide' />
					</Carousel.Item>

					<Carousel.Item className='slide_image' data-interval='8000'>
						<img
							className='d-block overlay_image'
							src={pix8}
							alt='Sixth slide'
						/>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
}

export default Slider;
