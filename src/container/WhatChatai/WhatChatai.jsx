import React from "react";
import './WhatChatai.css';
import Feature from '../../components/feature/Feature';
const WhatChatai = () => (

    <div className="gpt3__whatgpt3 section__margin" id="Features">
        <div className="gpt3__whatgpt3-feature">
            <Feature title="What is GPT-3" text="Discover the revolutionary language model that's reshaping the future of AI. GPT-3, developed by OpenAI, is the most powerful natural language processing AI yet, capable of generating human-like text and understanding context with unprecedented accuracy." />
        </div>
        
        <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">Lets Collaborate and Grow Strong</h1>

                <a href="https://github.com/talha1230" target="_blank" rel="noreferrer">
            <button class="button">
   <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
  Explore on Github

</button>
</a>
        </div>
        <div className="gpt3__whatgpt3-container">
            <Feature title="Chatbots" text="Transform customer interactions with intelligent chatbots powered by GPT-3. Enhance user engagement, automate responses, and deliver personalized experiences at scale." />
            <Feature title="Knowledgebase" text="Build comprehensive knowledge bases and information repositories using GPT-3's vast language understanding capabilities. Access a wealth of information and insights to empower decision-making and streamline workflows." />
            <Feature title="Education" text="Revolutionize the learning experience with AI-powered educational tools. From personalized tutoring to automated grading, leverage GPT-3 to create immersive and adaptive learning environments that cater to individual student needs." />
        </div>
    </div>
  );
  
 export default WhatChatai;
 // Add a closing curly brace here
