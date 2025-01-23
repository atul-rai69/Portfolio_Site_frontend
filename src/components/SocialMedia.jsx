import React from 'react';
import {BsTwitter , BsInstagram} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';
import { FaLinkedinIn , FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/atul-rai-05ba07223" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
        <div>
          <a href="https://github.com/atul-rai69" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <div>
          <a href="https://leetcode.com/u/atul_rai_694/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia
