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
  }
  h1 {
    font-family: "Rubik Moonrocks", cursive;
    text-align: center;
    margin-top: 25px;
    font-size: 35px;
    cursor: pointer;
  }
`;

export { SignupContainer };
