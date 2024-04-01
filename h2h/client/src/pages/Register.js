import React from "react";
import RegisterContainer from "./Register.styled";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logo from "../assets/h-2-h.png";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form");
  };

  const handleChange = ("onclick", () => {});

  return (
    <>
      <RegisterContainer>
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <div className="product">
            <img src={Logo} alt="Logo" />
            <h1>heart2heart</h1>
          </div>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="Type your password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            name="confirm-password"
            placeholder="Confirm your password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Register</button>
          <span>
            <Link to={Login}>Already have an account? Login</Link>
          </span>
        </form>
      </RegisterContainer>
    </>
  );
};

export default Register;
