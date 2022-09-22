import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
import Leyenda from './components/Leyenda';
import Contenidoprincipal from './components/Contenidoprincipal';



const App = () => {
  return (

    <>
      <Leyenda/>
      <Navbar />
      <Contenidoprincipal/>
    </>
  );
}

export default App;
