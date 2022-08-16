import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./Footer.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const FooterPagePro = () => {
	return (
		<div className='footer'>
			<MDBFooter bgColor='#' className='font-small footer_cons'>
				<MDBContainer className='text-center text-md-left'>
					<MDBRow className='text-center text-md-left pb-3'>
						<MDBCol md='3' lg='3' xl='3' className='glory mx-auto mt-3'>
							<h6 className='text-uppercase mb-4 font-weight-bold'>Ezylow</h6>
							<p>
								EzyFlow Delivers The Technical Capability And Professional
								Solutions That Enable Exceptional Client Services.
							</p>
						</MDBCol>
						<hr className='w-100  d-md-none' />
						<MDBCol
							md='2'
							lg='2'
							xl='2'
							className='glory mx-auto mt-3 justify-content-center'>
							<h6 className='text-uppercase mb-4 font-weight-bold'>
								Our Services
							</h6>
							<p>
								<a href='#!'>Project Management</a>
							</p>
							<p>
								<a href='#!'>Web Development</a>
							</p>
							<p>
								<a href='#!'>Mobile Development</a>
							</p>
							<p>
								<a href='#!'>Software Development</a>
							</p>
						</MDBCol>
						<hr className='w-100 clearfix d-md-none' />
						<MDBCol
							md='3'
							lg='2'
							xl='2'
							className='glory mx-auto mt-3 justify-content-center'>
							<h6 className='text-uppercase mb-4'>About Us</h6>
							<p>
								<a href='#!'>App Development </a>
							</p>
							<p>
								<a href='#!'>Software Support</a>
							</p>
							<p>
								<a href='#!'>Our Blog</a>
							</p>
							<p>
								<a href='#!'>Help</a>
							</p>
						</MDBCol>
						<hr className='w-100 clearfix d-md-none' />
						<MDBCol
							md='4'
							lg='3'
							xl='3'
							className='glory mx-auto mt-3 justify-content-center'>
							<h6 className='text-uppercase mb-4 font-weight-bold'>Contact</h6>
							<p>
								<i className='fa fa-home mr-3' /> Lagos, Victoria Island,
								Nigeria
							</p>
							<p>
								<i className='fa fa-envelope mr-3' /> orinamesunday360@gail.com
							</p>
							<p>
								<i className='fa fa-phone mr-3' /> + 2349067157554
							</p>
							<p>
								<i className='fa fa-print mr-3' /> + 2349068023096
							</p>
						</MDBCol>
					</MDBRow>
					<hr />
					<MDBRow className='d-flex align-items-center justify-content-center'>
						<MDBCol md='8' lg='8'>
							<p className='text-center text-md-left grey-text'>
								&copy; {new Date().getFullYear()} Copyright:{" "}
								<Link to='/https://mail.google.com/mail/u/0/?tab=km#inbox'>
									orinamesunday360@gmail.com
								</Link>
							</p>
						</MDBCol>
						<MDBCol md='4' lg='4' className='ml-lg-0 social-icon'>
							<div className='text-center text-md-right'>
								<ul className='list-unstyled list-inline'>
									<li className='list-inline-item'>
										<Link to='https://web.facebook.com/?_rdc=1&_rdr'>
											<i className='fab fa-facebook-f' />
										</Link>
									</li>
									<li className='list-inline-item'>
										<Link to='#'>
											<i className='fab fa-twitter' />
										</Link>
									</li>
									<li className='list-inline-item'>
										<Link to='#'>
											<i className='fab fa-google-plus' />
										</Link>
									</li>
									<li className='list-inline-item'>
										<Link to='#'>
											<i className='fab fa-linkedin-in' />
										</Link>
									</li>
								</ul>
							</div>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</MDBFooter>
		</div>
	);
};

export default FooterPagePro;
