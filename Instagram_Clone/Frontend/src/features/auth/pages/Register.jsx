import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const { user, loading, handleRegister } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    await handleRegister(username, email, password);
    navigate("/");
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
          <h1>REGISTER</h1>
          <form onSubmit={handleSubmit}>
            <input
              onInput={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
            />
            <input
              onInput={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />

            <input
              onInput={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
            <button className="button primary-button">Register</button>
            <p>
              Already have an account ?{" "}
              <Link className="authToggle" to="/Login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;
