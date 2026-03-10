import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "rsuite/dist/rsuite.min.css";
import 'react-multi-carousel/lib/styles.css';
import 'video-react/dist/video-react.css';
import { Country, State, City } from "country-state-city";
import "rsuite/dist/rsuite.min.css";
import 'animate.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


