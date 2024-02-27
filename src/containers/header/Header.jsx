import React from 'react';
import people from '../../assets/people.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <video className="background-video desktop" autoPlay loop muted>
      <source src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a57_GT_hero_2560px-transcode.mp4" data-wf-ignore="true"/>
    </video>
    <video className="background-video mobile" autoPlay loop muted>
      <source src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615a6b_GT_Hero_Mobile-transcode.mp4" data-wf-ignore="true"/>
    </video>

    <div className="gpt3__header-content">
      <h1 className="gradient__text">Hey! Welcome to My Portfolio Site</h1>
      <p>Embark on a journey of innovation and creativity with me as your guide. Let's harness the power of GPT-3 OpenAI to build extraordinary experiences and bring your visions to life. Together, we'll explore the boundless possibilities of technology and craft solutions that push the boundaries of what's possible.</p>

      <div className="gpt3__header-content__input">
        <button type="button">  
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              fill="currentColor"
            ></path>
          </svg>
          <span>Explore My Projects</span>
        </button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="" />
        <p>Together, your contributions and expertise will bolster our capabilities and drive our success to new heights.</p>
      </div>
    </div>
  </div>
);

export default Header;