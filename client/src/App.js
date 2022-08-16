import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import JumbotronPage from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import JoinUs from "./components/Joinus";
import CustomNavbar from "./components/CustomNavbar";


export default function App() {
  return (
    <>
     <Router>
     <CustomNavbar />
      <Routes>
        <Route path='/'exact element={<Home />} />
        <Route path="/about" element={<JumbotronPage /> } />
        <Route path="/services" element={<Services />} /> 
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/joinus" element={<JoinUs /> } />
      </Routes>
      </Router>
      </>
  );
}

