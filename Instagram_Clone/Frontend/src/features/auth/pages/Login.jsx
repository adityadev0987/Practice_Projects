import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';
import './style/form.scss'

const Login = () => {

  const{user,loading,handleLogin} = useAuth();

  const[username,setUsername] = useState('');
  const[password,setPassword] = useState('');
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    await handleLogin(username,password)
    navigate('/')
  }

  if(loading){
    return(
      <main>
        <h1>Loading...</h1>
      </main>
    )
  }

  return (
    <div>
      <main>
        <div className="form-container">
          <h1>LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <input onInput={(e)=>{setUsername(e.target.value)}} type='text' name='username' id='username' placeholder='Enter your username'/>
            <input onInput={(e)=>{setPassword(e.target.value)}} type='password' name='password' id='password' placeholder='Enter your password'/>
            <button className='button primary-button'>Login</button>
            <p>Don't have an account ? <Link className='authToggle'to='/Register'>Create Account</Link></p>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Login
