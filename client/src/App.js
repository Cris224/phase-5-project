import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import Main from './Main';
import Bottom from './Bottom';
import Login from './Login';
import Details from './Details';
import NewAccount from './NewAccount';
import About from './About';

function App() {

  const [user, setUser] = useState(false)
  const [gameObj, setGameObj] = useState('')
  const [usersArray, setUsersArray] = useState([])
  console.log(gameObj)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/users')
    .then(resp => resp.json())
    .then((data) => setUsersArray(data))
  }, [])

  function fetchGame(name){
    fetch(`/games/${name}`)
    .then(resp => resp.json())
    .then((data) => setGameObj(data))
  }


  return (
    <div className="App">
      <NavBar user={user} onLogout={setUser}/>
      <Routes>
        <Route path='/login'
        element={<Login onLogin={setUser}/>}/>
        <Route path='/create-account'
        element={<NewAccount/>}/>
        <Route path='/details'
        element={gameObj && <Details users={usersArray} gameObj = {gameObj} user={user}/>}/>
        <Route path='/about'
        element={<About/>}/>
        <Route path='/'
        element={<Main fetchGame={fetchGame}/>}/>
      </Routes>
      <Bottom/>
    </div>
  );

}

export default App
