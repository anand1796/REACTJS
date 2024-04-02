import styled from "styled-components";

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #b3003c;
  .product {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 70px;
    }
    h1 {
      font-family: "merienda";
      color: white;
      font-size: x-small;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #c7738f;
    padding: 20px 50px;
    border-radius: 10px;
    input {
      background-color: transparent;
      border: 1px solid #fd1a56;
      border-radius: 10px;
      padding: 10px 5px;
      outline: none;
      color: white;
      &::placeholder {
        color: white;
      }
    }
    button {
      background-color: #fd1a56;
      padding: 10px 5px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      color: white;
      font-weight: 600;
    }
    span {
      border: 1px solid #fd1a56;
      padding: 10px 5px;
      border-radius: 10px;

      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`;

export default RegisterContainer;
