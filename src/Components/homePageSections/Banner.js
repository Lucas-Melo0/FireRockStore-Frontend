import StyledHeader from "../../Styles/StyledHeader";
import styled from "styled-components";
import { useState } from "react";

export default function HeaderOne() {
  const [banner, setBanner] = useState("https://bit.ly/3xqxldX");

  return (
    <AddFeature>
      <StyledHeader>
        <nav>
          <img src={banner} alt="banner" />
        </nav>
      </StyledHeader>
      <div>
        <div>
          <p onClick={() => setBanner("https://bit.ly/3xqxldX")}>•</p>
          <p onClick={() => setBanner("https://bit.ly/3DuPsTZ")}>•</p>
          <p onClick={() => setBanner("https://bit.ly/3ddrZMf")}>•</p>
          <p onClick={() => setBanner("https://bit.ly/3BhTV9L")}>•</p>
          <p onClick={() => setBanner("https://bit.ly/3qJIumk")}>•</p>
        </div>
      </div>
    </AddFeature>
  );
}

const AddFeature = styled.span`
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    div {
      width: 10%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    p {
      width: 100%;
      font-size: 50px;
      color: #ffffff;
      opacity: 0.9;
      cursor: pointer;
    }
  }
`;
