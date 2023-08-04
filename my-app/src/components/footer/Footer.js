import React from 'react';
import { SiDatabricks } from 'react-icons/si';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi';
import './FooterStyles.css';

import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="logo-footer">
            <SiDatabricks className='icon' />
            <h2>CloudSolutions</h2>
          </div>
          <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <BsFillArrowUpCircleFill className='icon' />
          </Link>

        </div>
        <div className="col-container">
          <div className="col">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>My Account</h3>
            <p>Profile Settings</p>
            <p>Support Center</p>
            <p>Account Activity</p>
            <p>Refer a Friend</p>
          </div>
          <div className="col">
            <h3>Information</h3>
            <p>About us</p>
            <p>FAQ</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div className="col">
            <h3>Legal</h3>
            <p>Refund Policy</p>
            <p>Cookie Policy</p>
            <p>Copyright Notice</p>
            <p>Disclaimer</p>
          </div>
          <form>
            <h3>Subscribe to our newsletter</h3>
            <input type="email" placeholder='Enter your email' />
            <FiMail className='mail-icon' />
            <div className="social-group">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FiInstagram className='social-icon' />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FiFacebook className='social-icon' />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FiLinkedin className='social-icon' />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;