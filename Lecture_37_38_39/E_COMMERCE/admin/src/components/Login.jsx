import { useState } from 'react'
import { toast } from 'react-toastify'
import '../style/Login.css'

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
        const response = await fetch("http://localhost:3000/api/v1/admin-login",
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
            setToken(token)
            setEmail("")
            setPassword("")
            toast.success("Login successful!")
        }
        else {
            toast.error(result.message)
        }
    }
    catch(error){
            console.log(error)
        }
    }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="login-title">Admin Panel</h1>

        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <p className="form-label">Email Address</p>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <p className="form-label">Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login