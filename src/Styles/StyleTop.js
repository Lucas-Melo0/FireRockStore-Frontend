import styled from "styled-components";

const StyleTop = styled.main`
  min-width: 375px;
  width: 100%;
  height: 60px;
  background-color: #000000;
  padding-bottom: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  p {
    font-size: 14px;
  }

  aside {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    padding-top: 5px;
    h1 {
      font-size: 35px;
      font-weight: 700;
      color: #ffffff;
      padding: 25px 0 22px 3px;
      cursor: pointer;
    }
    div {
      padding: 20px 3px 10px 0;

      div {
        font-size: 28px;
        color: #ffffff;
        opacity: 0.9;
        font-weight: 600;
        cursor: pointer;

        ion-icon[name="cart-outline"] {
          cursor: pointer;
        }
        ion-icon[name="menu-outline"] {
          cursor: pointer;
        }
      }
    }
  }
`;

export default StyleTop;
