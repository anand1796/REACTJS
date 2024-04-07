import React, { useState, useEffect } from "react";
import FormContainer from "./FormContainer.styled";
import Logo from "../assets/spark.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (localStorage.getItem("spark-user")) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { username, email, password } = values;

      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      console.log(data.status);

      if (data.status === false) {
        toast.error(data.msg, {
          theme: "dark",
        });
      } else {
        localStorage.setItem("spark-user", JSON.stringify(data.user));
        toast.success("Registered Successfully, redirecting to Login page", {
          theme: "dark",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
  };

  function handleValidation() {
    const toastOptions = {
      theme: "dark",
      autoClose: 4000,
    };

    const { username, email, password, confirmPassword } = values;

    if (username.length <= 3) {
      toast.error("Username should be greater than 3 characters", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email is a required field", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password Length should be equal to or greater than 8 characters",
        toastOptions
      );
      return false;
    } else if (password !== confirmPassword) {
      toast.error(
        "Password and Confirm Password should be same...",
        toastOptions
      );
      return false;
    }

    // toast.success("Successfully registered", toastOptions);
    return true;
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="product">
            <img src={Logo} alt="brand-logo" />
            <h1>SparkChat</h1>
          </div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
          <button type="submit">Register</button>
          <span>
            <Link to="/login">
              Already have an account? <span>Login</span>
            </Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

export default Register;
