import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router'
import '../style/form.scss'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
  const{user , loading , handleLogin} = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [logined, setLogined] = useState(false);

  // const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault();

    await handleLogin(username,password)
    setLogined(true);

    // navigate('/')
  }

  if(loading){
    return(
      <main>
        <h1>Loading...</h1>
      </main>
    )
  }

  if(logined) {
      return (
        <main>
          <div className="form-container">
            <h1>Welcome to Instagram</h1>
            <p>Login Successfully</p>
          </div>
        </main>
      )
    }


  return (
    <main>
      <div className='form-container'>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <input 
        onInput={(e)=>{setUsername(e.target.value)}}
        type='text' 
        name='username'
        placeholder='Enter Your Username'/>
        <input 
        onInput={(e)=>{setPassword(e.target.value)}}
        type='password' name='password'
        placeholder='Enter Your Password'
        />
        <button>LOGIN</button>
      </form>
      <p>Don't have an account? <Link className='authToggle' to='/Register'>Register</Link> </p>
    </div>
    </main>
    
  )
}

export default Login
