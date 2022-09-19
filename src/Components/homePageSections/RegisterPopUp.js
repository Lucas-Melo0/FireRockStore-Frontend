import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import productContext from "./Context";

export default function RegisterPopUp() {
  const { setVisibility, visibility } = useContext(productContext);
  const { userName, setUserName } = useContext(productContext);

  function handleCloseOutline() {
    setVisibility("hidden");
  }

  const auth = JSON.parse(localStorage.getItem("auth"));
  setUserName(auth.name);

  const token = localStorage.getItem("auth");

  return (
    <StyledPopUp visibility={visibility}>
      <div>
        <table onClick={handleCloseOutline}>
          <ion-icon name="close-outline"></ion-icon>
        </table>
      </div>
      {!token ? (
        <span>
          <Link to={`/entrada`}>
            <div> Sign In </div>
          </Link>
          <Link to={`/cadastro`}>
            <div> Sign Up </div>
          </Link>
        </span>
      ) : (
        <span>
          <h1> Hello, {userName}! </h1>
          <Link to={`/`}>
            <div> Orders </div>
          </Link>
          <Link to={`/entrada`}>
            <div> Sign Out </div>
          </Link>
        </span>
      )}
    </StyledPopUp>
  );
}

const StyledPopUp = styled.nav`
  min-width: 375px;
  width: 100%;
  height: 100%;
  background-color: rgba(245, 241, 247, 0.925);
  border-radius: 5px;
  position: fixed;
  z-index: 10;
  //top: 55px;
  left: 0;
  visibility: ${(props) => props.visibility};
  div {
    width: 50px;
    height: 50px;
    padding: 20px 0 40px 20px;

    table {
      width: 35px;
      height: 35px;
      color: red;
      font-size: 30px;
      font-weight: 800;
      border: 1px solid red;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 0 40px;

      ion-icon[name="close-outline"] {
        cursor: pointer;
      }
    }
  }

  span {
    width: 100%;
    height: 190px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 5px;
    background-color: rgba(245, 241, 247, 0.925);
    opacity: 0.9;
    padding: 10px 3px 0 3px;
    z-index: 11;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 170px;
      height: 55px;
      background-color: #040404;
      border-radius: 5px;
      font-size: 22px;
      font-weight: 700;
      color: #ffffff;
      cursor: pointer;
      padding-bottom: 25px;
      padding-right: 10px;
    }
  }
  h1 {
    font-size: 30px;
    font-weight: 700;
    color: black;
    padding: 5px 0;
  }
`;
