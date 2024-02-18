import React from "react";
//all components from the components folder
import { Navbar, Article as Brand, CTA } from "./components";
import { blog as Blog, features as Feature, footer as Footer, Header, possibility as Possibility, WhatChatai } from "./container";
import 'C:/Users/Talha PC/chatai/src/App.css';
import './index.css'
const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatChatai />
            <Feature />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />


        </div>
    );
}
export default App;
// Add a closing curly brace here
