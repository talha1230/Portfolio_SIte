// Import React and the createRoot method from react-dom/client
import React from "react";
import { createRoot } from "react-dom/client";

// Import the App component from App.js
import App from "./App";

// Get the DOM element where you want to render the React component
const container = document.getElementById("root");

// Create a React root for the container element
const root = createRoot(container);

// Render the App component inside the root
root.render(<App />);

