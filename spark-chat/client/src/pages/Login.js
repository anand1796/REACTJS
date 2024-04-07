import React, { useState, useEffect } from "react";
import FormContainer from "./FormContainer.styled";
import Logo from "../assets/spark.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("spark-user")) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      console.log(loginRoute);
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      console.log(data.status);

      if (data.status === false) {
        toast.error(data.msg, {
          theme: "dark",
        });
      } else {
        localStorage.setItem("spark-user", JSON.stringify(data.user));
        toast.success("Registered Successfully, redirecting to Chat page", {
          theme: "dark",
          autoClose: 4000,
        });
        setTimeout(() => {
          navigate("/");
        }, 4000);
      }
    }
  };

  function handleValidation() {
    const { username, password } = values;

    const toastOptions = {
      theme: "dark",
      autoClose: 4000,
    };

    if (username === "") {
      toast.error("Username is required ", toastOptions);
      return false;
    } else if (username.length <= 3) {
      toast.error("Username should be greater than 3 characters", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Password is required", toastOptions);
      return false;
    }
    return true;
  }

  const handleChange =
    ("onclick",
    (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    });

  return (
    <>
      <FormContainer>
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
            min="3"
          />
          <input
            type="password"
            name="password"
            placeholder="Type your password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Login</button>
          <span>
            <Link to="/register">
              Don't have an account? <span>Register</span>{" "}
            </Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
};

export default Login;
