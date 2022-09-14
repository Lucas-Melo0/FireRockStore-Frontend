import styled from "styled-components";

const HomePageStyles = styled.main`
  min-width: 375px;
  width: 100%;
  height: 100%;
  background-color: #1b0b23;
  padding-bottom: 20px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  header {
    width: 100%;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    p {
      font-size: 25px;
      color: #ffffff;
    }
  }

  aside {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;

    h1 {
      font-size: 26px;
      font-weight: 700;
      color: #ffffff;
      padding: 25px 0 22px 3px;
    }
    div {
      padding: 20px 3px 22px 0;
      div {
        font-size: 24px;
        color: #ffffff;
        font-weight: 600;
      }
    }

    img {
      width: 54px;
      height: 54px;
      border-radius: 10px;
      padding: 10px 0 10px 0;
      object-fit: cover;
    }
  }
`;

export default HomePageStyles;
