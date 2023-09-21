import React, {useEffect} from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import AOS from 'aos'
import "aos/dist/aos.css";

const Experience = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
    });
  }, []);

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experiences</h2>
      <div className='container experience__container'>

        <div className="experience__frontend" data-aos="slide-up">
          <h3>Skills</h3>
          <div className="experience__content">

            
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS3</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React-JS</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Next-js</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Redux</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>           
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node-JS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Express-JS</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Git || Github</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind css</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Matelia UI || Next UI </h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Problem Solving</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Responsive Design</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend" data-aos="slide-up">
          <h3>Certifications</h3>

          <div className="experience__content certifications">

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript and React-js Essantials</h4>
                <small className='text-light'>Certified : <a href='https://verify.letsupgrade.in/certificate/LUERJSAUG122443' target='_blank'>Click</a></small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Frontend Web Devlopment Bootcamp</h4>
                <small className='text-light'>Certified : <a href='https://codekaro.in/workshop-certificate/eca48860ae9c5f80' target='_blank'>Click</a></small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Power Programmer Virtual Experience Program</h4>
                <small className='text-light'>Certified : <a href='https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Infosys/qyS5w2xfLoFEKAFpH_Infosys_n8Fq69ywMDxmEeLRA_1648562066016_completion_certificate.pdf' target='_blank'>Click</a></small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Backend Development</h4>
                <small className='text-light'>Certified : <a href='#' target='_blank'>Click</a></small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
