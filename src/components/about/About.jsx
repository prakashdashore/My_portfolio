import React, { useEffect } from "react";
import "./about.css";
import ME from "../../assets/my_pick (1).png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
    });
  }, []);

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me" data-aos="slide-up">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>
        <div className="about__content" data-aos="slide-up">
          <p>
          A diligent Electronics and communication undergraduate with innovative technical skills, always believe in adopting most optimistic approach of problem solving.I am a keen learner and good observer,and always like to take initiatives and having good leadership qualities. My area of expertise are in HTML5,CSS, DBMS, JAVASCRIPT. i am enthusiastic to work in the field of web development . I am always ready to face new challenges or seeking a new opportunity in my life. I like to explore my skills and stay updated about the technologies that helps me to thrive my career.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;