import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #5356ff;
  font-family: "Quicksand", sans-serif;
  .product {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 5px;
    img {
      height: 100px;
      width: 100px;
      border-radius: 50%;
    }
    h1 {
      font-family: "merienda";
      color: white;
      /* font-size: 20px; */
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #378ce7;
    padding: 20px 50px;
    border-radius: 10px;
    input {
      background-color: transparent;
      border: 1.5px solid #5356ff;
      border-radius: 10px;
      padding: 10px 5px;
      outline: none;
      color: white;
      &::placeholder {
        color: white;
      }
    }
    button {
      background-color: #5356ff;
      padding: 10px 5px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      color: white;
      font-weight: 600;
    }
    span {
      border: 1.5px solid #5356ff;
      padding: 10px 5px;
      border-radius: 10px;
      a {
        text-decoration: none;
        color: white;
        span {
          /* color: #67c6e3; */
          color: white;
          border: none;
          /* font-weight: 500; */
        }
      }
    }
  }
`;

export default FormContainer;
