import "./AboutContentStyles.css";

import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.jfif";

import Logo_pic from "../assets/grad_pic_3.png";

import { Link } from "react-router-dom";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <img src={Logo_pic} alt="logoPic" />
            <h1>Who Am I?</h1>
            <p>
                Im a react front-end developer. I create responsive
                secure websites fo my clients.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="top">
                    <img src={React2} className="img" alt="true" />
                </div>
                <div className="bottom">
                    <img src={React1} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent