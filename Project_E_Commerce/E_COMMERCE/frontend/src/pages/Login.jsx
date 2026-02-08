import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
import { toast } from 'react-toastify';
import '../style/Login.css';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  async function onSubmitHandler(e){
    e.preventDefault()
    if(currentState === "Sign Up"){
        try {
            const response = await fetch(`${backendUrl}/api/v1/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, email, password})
            })

            const result = await response.json()
            if(response.ok){
                const token = result.data
                localStorage.setItem("token", token)
                localStorage.setItem("userId", result.userId)
                setToken(token)
                setName("")
                setEmail("")
                setPassword("")
                navigate(window.history.back())
            }
            else {
                toast.error(result.message)
            }
        }
        catch(error){
            console.log(error)
        }
    }
    else {
         try {
            const response = await fetch(`${backendUrl}/api/v1/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password})
            })
            
            const result = await response.json()
            if(response.ok){
                const token = result.data
                localStorage.setItem("token", token)
                localStorage.setItem("userId", result.userId)
                setToken(token)
                setEmail("")
                setPassword("")
                navigate(window.history.back())
            }
            else{
                toast.error(result.message)
            }
        }
        catch(error){
            console.log(error)
        }
    }  
  }
 

  return (
    <form className="login-form" onSubmit={onSubmitHandler}>
      <div className="login-title">
        <p>{currentState}</p>
        <span></span>
      </div>

      {currentState === 'Sign Up' && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

    <div className="login-links">
        {currentState === 'Login' ? (
        <p className="link-text"> Does not have an account?{' '}
        <span className="link" onClick={() => setCurrentState('Sign Up')}> Create account </span>
        </p>
        ) : (
        <p className="link-text">
        Already have an account?{' '}
        <span className="link" onClick={() => setCurrentState('Login')}> Login Here </span>
        </p>
    )}
    </div>

      <button type="submit">
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;