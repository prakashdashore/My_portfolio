import React, { useEffect } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
    });
  }, []);
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    alert("Massage sent to prakash !!");
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container" data-aos="slide-up">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>prakashdashore999@gmail.com</h5>
            <a href="mailto:prakashdashore999@gmail.com" target="blank">
              Send a message
            </a>
          </article>

          <a
            href="https://api.whatsapp.com/send?phone=916261492915&text=Hii%2C%F0%9F%91%8B"
            target="_blank"
          >
            <article className="contact__option wtsp">
              <BsWhatsapp className="contact__option-icon" />
              <h4 style={{color:'black'}} >WhatsApp</h4>
              <small>Send a message</small>
            </article>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary btn-sendmsg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
