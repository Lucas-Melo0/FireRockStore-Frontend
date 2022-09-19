import styled from "styled-components";

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  row-gap: 10px;
  width: 90%;
  margin: 0 auto;

  p {
    text-align: center;
    margin-top: 25px;
    color: #ffffff;
    opacity: 0.9;
    font-size: 23px;
  }
  h1 {
    font-family: "Rubik Moonrocks", cursive;
    text-align: center;
    margin-top: 75px;
    font-size: 35px;
    color: white;
    cursor: pointer;
  }
`;

export { SignupContainer };
