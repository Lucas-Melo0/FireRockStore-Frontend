import styled from "styled-components";

const StyledProduct = styled.main`
  min-width: 326px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  padding-top: 30px;

  div {
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
    align-items: flex-start;
    justify-content: center;
    background-color: #000000;
    padding: 80px 10px;
    word-break: break-word;
    gap: 25px;

    span {
      max-width: 300px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #000000;

      h1 {
        color: #ffffff;
        opacity: 0.9;
        padding: 8px 3px;
        font-size: 28px;
      }
      h2 {
        color: #ffffff;
        opacity: 0.9;
        padding: 8px 0;
        font-size: 28px;
        font-style: italic;
      }
      p {
        color: #ffffff;
        opacity: 0.9;
        font-size: 20px;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      background-color: #312f2f;
    }
    nav {
      max-width: 172px;
      width: 100%;
      height: 216px;
      background-color: #312f2f;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.25);
      cursor: pointer;

      section {
        max-width: 172px;
        width: 100%;
        height: 216px;
        background-color: #312f2f;
        border-radius: 9px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
        img {
          max-width: 172px;
          width: 100%;
          height: 216px;
          object-fit: cover;
          border-radius: 9px;
          cursor: pointer;
        }
      }
    }

    footer {
      max-width: 300px;
      width: 100%;
      height: 50px;
      background-color: red;
      color: #ffffff;
      font-size: 28px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      padding: 0 5px;
      margin: 15px 0;
      cursor: pointer;
      nobr {
        cursor: pointer;
      }
    }
  }
`;

export default StyledProduct;
