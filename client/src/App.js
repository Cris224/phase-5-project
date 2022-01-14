import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import Main from './Main';
import Bottom from './Bottom';
import GameList from './GameList';
import Login from './Login';

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <>
      <NavBar/>
      </>
      <Login/>
      {/* <Main/> */}
      <Bottom/>
      <Routes>
        <Route path='/game-list'
        element={<GameList/>}/>
        <Route path='/'
        element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
