import React from 'react';
import Article from '../../components/article/Article';
import { project01, project02, project03, project04, project05 } from './imports';
import './blog.css';

const Projects = () => (
  <div className="gpt3__blog section__padding" id="projects">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Check Out My Projects</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={project01} date="Sep 26, 2021" text="Project 1: A web application built with React and Node.js." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={project02} date="Oct 10, 2021" text="Project 2: An Android app developed using Kotlin." />
        <Article imgUrl={project03} date="Nov 15, 2021" text="Project 3: A machine learning model for predicting house prices." />
        <Article imgUrl={project04} date="Dec 20, 2021" text="Project 4: A data visualization dashboard built with D3.js." />
        <Article imgUrl={project05} date="Jan 5, 2022" text="Project 5: A blockchain-based voting system." />
      </div>
    </div>
  </div>
);

export default Projects;