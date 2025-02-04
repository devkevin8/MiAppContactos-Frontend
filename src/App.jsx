import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import Lista from './components/table'
import Navbar from './components/navbar'
import Formulario from './components/form'
import { url } from '../env'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const headers = [
    "Id",
    "Nombre",
    "Apellido",
    "Telefono",
    "Email",
    "Acciones"
  ];

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar  />} />
          <Route path="/listaContactos" element={<Lista headers={headers} />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
