import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import Lista from './components/table'
import { url } from '../env'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(url);
    setData(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const headers = [
    "Id",
    "Nombre",
    "Apellido",
    "Telefono",
    "Email"
  ];

  return (
      <Lista data={data} headers={headers}/>
  );
}

export default App
