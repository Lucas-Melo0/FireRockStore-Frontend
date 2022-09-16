import styled from "styled-components";

const StyledProductList = styled.main`
  min-width: 326px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  padding-bottom: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 25px;
    color: #ffffff;
    padding: 20px;
    opacity: 0.9;
  }

  header {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    padding: 10px 0;
    flex-wrap: wrap;
    gap: 25px;
    nav {
      width: 195px;
      height: 255px;
      background-color: #312f2f;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.25);
      cursor: pointer;

      h5 {
        font-size: 16px;
        padding: 3px 0 2px 5px;
        color: #ffffff;
        opacity: 0.9;
        cursor: pointer;
      }
      h6 {
        padding: 3px 0 5px 5px;
        border-radius: 5px;
        color: #ffffff;
        opacity: 0.9;
        cursor: pointer;
      }
    }
  }

  section {
    width: 195px;
    height: 255px;
    background-color: #312f2f;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    img {
      width: 172px;
      height: 216px;
      object-fit: cover;
      border-radius: 9px;
      padding-top: 10px;
      cursor: pointer;
    }
  }
`;

export default StyledProductList;
