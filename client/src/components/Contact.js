import React from "react";
import "./Contact.css";
import FooterPage from "./Footer";
import location1 from "../images/location1.jpg";
import location2 from "../images/location2.jpg";
import loca3 from "../images/loca3.jpeg";
import Form from "./Form"

import loca5 from "../images/loca5.jpeg";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
function Contact() {
  return (
    <>
      <div className="contact_bg">
        <div className="contactBG_content">
          <h2>
            Welcome to EzyFlow Tech.
            <br /> We look forward to <br />
            hearing from you.
          </h2>
        </div>
      </div>
      <section className="contact_section">
        <div className="contact_section_content">
          <h1>Our Locations</h1>
          <br />
          <p>
            EzyFlow Technology has four offices in locations all around the
            world. We’re continuously growing and evolving. Check out careers in
            your country or why not consider relocating for a new adventure!
          </p>
        </div>
      </section>
      <MDBRow className="CardBg">
        <MDBCol md="3">
          <MDBCard className="image-card">
            <MDBCardImage
              className="localImg"
              top
              src={location1}
              overlay="white-slight"
              hover
              waves
              alt="MDBCard image cap"
            />
            <MDBCardBody>
              <MDBCardTitle className="card-title">
                EzyFlow Dallas, Texas
              </MDBCardTitle>
              <hr />
              <MDBCardText className="card-para">
                16000 Dallas Parkway, Suite 700N Dallas, TX 75248 FL 33186
              </MDBCardText>
              <a href="#!" className="black-text d-flex justify-content-end">
                <h5>
                  Read more
                  <MDBIcon icon="angle-double-right" className="ml-2" />
                </h5>
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="3">
          <MDBCard className="image-card">
            <MDBCardImage
              className="localImg"
              top
              src={location2}
              overlay="white-slight"
              hover
              waves
              alt="MDBCard image cap"
            />
            <MDBCardBody>
              <MDBCardTitle className="card-title">
                EzyFlow Lagos, Nigeria
              </MDBCardTitle>
              <hr />
              <MDBCardText className="card-para">
                Lugard Ave, Ikoyi 106104, Lagos behind tek Experts
              </MDBCardText>
              <a href="#!" className="black-text d-flex justify-content-end">
                <h5>
                  Read more
                  <MDBIcon icon="angle-double-right" className="ml-2" />
                </h5>
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="3">
          <MDBCard className="image-card">
            <MDBCardImage
              className="localImg"
              top
              src={loca3}
              overlay="white-slight"
              hover
              waves
              alt="MDBCard image cap"
            />
            <MDBCardBody>
              <MDBCardTitle className="card-title">
                EzyFlow Abuja - Nigeria
              </MDBCardTitle>
              <hr />
              <MDBCardText className="card-para">
                Clan Place Plot 1458 Tigris Crescent, Off Aguyi Ironsi.
              </MDBCardText>
              <a href="#!" className="black-text d-flex justify-content-end">
                <h5>
                  Read more
                  <MDBIcon icon="angle-double-right" className="ml-2" />
                </h5>
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="3">
          <MDBCard className="image-card">
            <MDBCardImage
              className="localImg"
              top
              src={loca5}
              overlay="white-slight"
              hover
              waves
              alt="MDBCard image cap"
            />
            <MDBCardBody>
              <MDBCardTitle className="card-title">EzyFlow China</MDBCardTitle>
              <hr />
              <MDBCardText className="card-para">
                No. 5 Huixianyuan, Dalian High-Tech Industrial Park
              </MDBCardText>
              <a href="#!" className="black-text d-flex justify-content-end">
                <h5>
                  Read more
                  <MDBIcon icon="angle-double-right" className="ml-2" />
                </h5>
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <Form />
      <FooterPage />
    </>
  );
}

export default Contact;
