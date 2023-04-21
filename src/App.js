import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Key from './Components/Key'
import Skill from './Components/Skill'
import Skills from './Components/Skills'
import Try from './Components/Try'
import About from './Components/About'
import Contact from './Components/Contact'
import './App.css';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Navbar/>
      <Routes className="back">
        {/* <Route path="/service" component={Service}/> */}
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/key" element={<Key/>}/>
        {/* <Route path="/report/:id" ><Report/></Route>
        <Route path="/district/:id" ><List/></Route>
        <Route path="/place/:id" ><SingleDis/></Route> */}
        <Route exact path="/" element={<Home/>}/>
        {/* <Redirect to="/" /> */}
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;