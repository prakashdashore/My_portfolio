import React from "react";
import "./header.css";
import CTA from "./CTA";
// import ME from '../../assets/headerImg.jpeg'
// import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 id="hello">Hello 👋, I'm</h5>
        <h1> Prakash Dashore</h1>
        <h5 className="text-light">MERN Stack Developer </h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
