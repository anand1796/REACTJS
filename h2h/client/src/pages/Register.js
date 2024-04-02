import React, { useState, useEffect } from "react";
import RegisterContainer from "./Register.styled";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/h-2-h.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";

const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      console.log(registerRoute);
      const { username, email, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      console.log(data.message);

      if (data.status === false) {
        toast.error(data.message, {
          theme: "dark",
        });
      }

      if (data.status === true) {
        localStorage.setItem("chat-user", JSON.stringify(data.user));
      }
      navigate("/");
    }
  };

  function handleValidation() {
    const { username, email, password, confirmPassword } = values;

    const toastOptions = {
      theme: "dark",
      autoClose: 4000,
    };

    if (password !== confirmPassword) {
      toast.error("passwords doesn't matched", toastOptions);
      return false;
    } else if (username.length <= 3) {
      toast.error("Username must be greater than 3 characters", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password must be equals or greater than 8 characters",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required", toastOptions);
      return false;
    }
    toast.success("Registered Successfully...", {
      theme: "dark",
      autoClose: 4000,
    });
    return true;
  }

  const handleChange =
    ("onclick",
    (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    });

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
            name="confirmPassword"
            placeholder="Confirm your password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Register</button>
          <span>
            <Link to="/login">Already have an account? Login</Link>
          </span>
        </form>
      </RegisterContainer>
      <ToastContainer />
    </>
  );
};

export default Register;
