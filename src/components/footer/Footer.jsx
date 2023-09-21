import React, {useEffect} from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import './footer.css'
import AOS from 'aos'
import "aos/dist/aos.css";

const Footer = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
    });
  }, []);


  return (
    <footer  data-aos="slide-up">
      <a href='#' className='footer__logo' id='my_name'>Prashhh</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/prakash-dashore' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/prakashdashore' target="_blank"><FaGithub/></a>
        <a href='https://instagram.com/this.name_prashhh?igshid=YzU1NGVlODEzOA==' target="_blank"><FiInstagram/></a>


      </div>
      <div className='footer__copyright'>
        <small>Create with 💖 by ME</small>
        <br/>
        <small>Copyright &copy; PRAKASH DASHORE. All rights reserved.</small>
      </div>
      <div className='footer__copyright'>
      </div>
    </footer>
  )
} 

export default Footer