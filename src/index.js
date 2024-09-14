import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout/Layout.jsx'
import './index.css';
import 'animate.css';
import { pictures } from './data/pictures.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Layout pictures={pictures} />
    </React.StrictMode>
);