import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './assets/buddingPopWine.gif';
import './assets/style.css'

import './App.css';
import Drinks from './pages/Drinks';
import Recipe from './pages/Recipe';
import Header from './components/Header';

function App() {
  return (
    <div className='container'>
      <div className="App">
        <BrowserRouter>
          <Header buddingPopWine={logo} />
          <Routes>
            <Route path="/" element={<Drinks/>}/>
            <Route path="/Recipe" element={<Recipe/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
