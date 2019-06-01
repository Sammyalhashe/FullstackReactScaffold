/*
 * This file does the initial render of the frontend
 * Webpack searches for this file as an entry point to bundle into bundle.js
 */
// React imports
import React from 'react';
import ReactDOM from 'react-dom';
// Main React Component
import App from '../components/App';


ReactDOM.hydrate(<App initialData={window.initialData}/>, document.getElementById('root'))
