import './NavBar.css'
import React from 'react';
import { Link } from 'react-router-dom'


function NavBar({user, onLogout}){

    function handleLogout() {
        fetch("/api/logout", {
          method: "DELETE",
        }).then(() => onLogout);
    }

    function welcomeUser(){
        if (user === false) {
            return <p className='greet'>Anonymous</p>
          } else {
            return <p className='greet'>Welcome, {user.username}!</p>;
          }
    }

    function logInOrOut(){
        if (user === false)
            return(
                <Link to='/login'>
                    <button id='log-btn'>Login</button>
                </Link>
            )
        else
            return(
                <button id='log-btn' onClick={handleLogout}>Logout</button> 
            )
    }

    return(
        <div id='nav'>
            <Link to='/'>
                <button id='home-link'>Home</button>
            </Link>
            {logInOrOut()}
            {welcomeUser()} 
            
            <h1 className='neon'>Shelf Warmers</h1>
            
        </div>
    )
}

export default NavBar