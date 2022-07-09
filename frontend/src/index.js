import React from 'react'; //importing react from react 
import ReactDOM from 'react-dom/client'; //importing dom for routes 
import App from './App'; //importing app 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
