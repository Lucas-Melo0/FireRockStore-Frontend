import StyledHeader from "../../Styles/StyledHeader";
import styled from "styled-components";
import { useState } from "react";

export default function HeaderOne() {
  const [banner, setBanner] = useState(0);

  const images = [
    "https://bit.ly/3xqxldX",
    "https://bit.ly/3DuPsTZ",
    "https://bit.ly/3ddrZMf",
    "https://bit.ly/3BhTV9L",
    "https://bit.ly/3qJIumk",
  ];

  setInterval(function () {
    banner === 4 ? setBanner(0) : setBanner(banner + 1);
  }, 5000);

  return (
    <AddFeature>
      <StyledHeader>
        <nav>
          <img src={images[banner]} alt="banner" />
        </nav>
      </StyledHeader>
      <div>
        <div>
          <p>•</p>
          <p>•</p>
          <p>•</p>
          <p>•</p>
          <p>•</p>
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
      font-size: 35px;
      color: #ffffff;
      opacity: 0.9;
    }
  }
`;
