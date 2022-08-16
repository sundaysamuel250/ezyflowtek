import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactImg from "../../src/images/testMon.jpg";

function Form2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        number,
        message,
      };
      setBool(true);

      const res = await axios.post(`/contact`, data);
      if (
        name.length === 0 ||
        email.length === 0 ||
        number.length === 0 ||
        message.length === 0
      ) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="contact-containers" id="containerRequest">
      <ToastContainer position="top-center" limit={1} />
      <div className="contact-heading">
        <h1>Contact Us</h1>
        <p>Let's talk Business</p>
      </div>
      <div className="contact-parent">
        <div className="col">
          <h2 className="title">Get In Touch 📧</h2>
          <img src={contactImg} alt="no connection" />
        </div>
        <div className="form-container">
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">FullName</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="phone">Your Phone Number</label>
            <input type="tel" onChange={handleNumber} value={number} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                {bool ? "sending...." : "submit"}
                <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Form2;
