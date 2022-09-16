import styled from "styled-components";

const StyledHeader = styled.div`
  min-width: 326px;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  gap: 20px;

  nav {
    min-width: 326px;
    width: 90%;
    height: 350px;
    background-color: #ffffff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      //object-position: 50% 100;
      border-radius: 5px;
    }
  }
`;
export default StyledHeader;
