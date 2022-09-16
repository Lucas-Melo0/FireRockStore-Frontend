import StyledHeader from "../../Styles/StyledHeader";
import styled from "styled-components";

export default function HeaderOne() {
  return (
    <AddFeature>
      <StyledHeader>
        <nav>
          <img src="https://bit.ly/3xqxldX" />
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

//Images for the Banner:

//https://bit.ly/3DuPsTZ

//https://bit.ly/3ddrZMf

//https://bit.ly/3BhTV9L

//https://bit.ly/3qJIumk
