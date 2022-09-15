import styled from "styled-components";

const StyledPopUp = styled.nav`
  min-width: 375px;
  width: 100%;
  height: 100%;
  background-color: rgba(8, 6, 9, 0.925);
  border-radius: 5px;
  opacity: 0.9;
  position: fixed;
  z-index: 10;
  top: 45px;
  left: 0;
  display: none;
  span {
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    border-radius: 5px;
    background-color: rgba(8, 6, 9, 0.925);
    padding: 20px 3px 0 3px;
    z-index: 11;
    cursor: pointer;
    div {
      width: 50vw;
      height: 55px;
      background-color: #ffffff;
      border-radius: 5px;
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

export default StyledPopUp;
