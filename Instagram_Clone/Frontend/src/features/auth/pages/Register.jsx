import React,{useState} from "react";
import "../style/form.scss";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const{loading,handleRegister} = useAuth()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async(e)=>{

    e.preventDefault()
    await handleRegister(username,email,password)
    setRegistered(true)

  }

  if(loading)
  {
    return(
      <main>
        <h1>Loading...</h1>
      </main>
    )
  }

  if(registered) {
    return (
      <main>
        <div className="form-container">
          <h1>Welcome to Instagram</h1>
          <p>Your account has been created successfully.</p>
          <p>Please login to continue.</p>
          <Link className="authToggle" to="/login">
            Go to Login
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      <div className="form-container">
        <h1>REGISTER</h1>
        <form onSubmit={handleSubmit}>
          <input 
          onChange={(e) => { setUsername(e.target.value) }}
          type="text" placeholder="Enter your username" />
          <input
          onChange={(e) => { setEmail(e.target.value) }} 
          type="email" placeholder="Enter your email" />
          <input 
          onChange={(e) => { setPassword(e.target.value) }}
          type="password" placeholder="Enter your password" />
          <button>REGISTER</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="authToggle" to="/Login">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
