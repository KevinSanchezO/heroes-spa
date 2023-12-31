// Primero las importaciones de React, luego las de terceros y
// por ultimo las propias

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import './styles.css';
import { HeroesApp } from './HeroesApp.jsx';

// Todo lo que este dentro del BrowserRouter lograra acceder a este para poder 
// Llegar a rutas asignadas en los routes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
