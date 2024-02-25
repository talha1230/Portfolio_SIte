import React from 'react';

import { Footer, Blog, Possibility, Features, Intro, Header } from './containers';
import { CTA, Experience, Navbar,Article } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Experience/>
    <Intro />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Article />
    <Footer />
    
  </div>
);

export default App;
