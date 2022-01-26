import { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom';

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      })
        .then((r) => r.json())
        .then((user) => onLogin(user));
    }
  
    return (
      <form onSubmit={handleSubmit} id='login'>
        <input
          type="text"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>If you do not have an account please 
          <Link to='/create-account'>
            Sign Up.
          </Link>
          </p>
      </form>
    );
  }

export default Login