import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout/Layout.jsx'
import './index.css';
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Layout />
    </React.StrictMode>
);