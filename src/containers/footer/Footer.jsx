import React from 'react';
import gpt3Logo from '../src/assets/cat.svg';
import './footer.css';

const Footer = () => {
  const [clickCount, setClickCount] = React.useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step into the future before others</h1>
      </div>

      <div className="gpt3__footer-btn">
        <button onClick={handleClick} className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;Lets Collaborate&nbsp;</span>
          <a href="https://github.com/talha1230" target="_blank" rel="noopener noreferrer" className="hover-text">&nbsp;Github&nbsp;</a>
        </button>
      </div>

      <div className="gpt3__footer-links"></div>
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Your Name, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Quick Links</h4>
        <p>About Me</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>Education</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>More</h4>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Contact Info</h4>
        <p>PJ, KL, Malaysia</p>
        <p>b09230027@student.unimy.edu.my</p>
      </div>
    </div>
  );
};

export default Footer;
