import React from 'react';
import Feature from '../../components/feature/Feature';
import './Intro.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="About Me" text="I'm a student passionate about software development. I enjoy problem-solving and the process of creating functional, user-friendly applications." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Explore My Work and Skills</h1>
      <p>Discover my projects and areas of expertise</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Projects" text="Check out my projects where I've applied my knowledge and skills to create functional applications." />
      <Feature title="Skills" text="Discover the programming languages, tools, and techniques I've learned and applied in my projects." />
      <Feature title="Education" text="Learn about my educational background and the coursework that has contributed to my knowledge base." />
    </div>
  </div>
);

export default WhatGPT3;