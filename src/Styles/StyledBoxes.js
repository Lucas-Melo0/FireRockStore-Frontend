import styled from "styled-components";

const StyledBoxes = styled.div`
  min-width: 326px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  padding-bottom: 20px;
  gap: 20px;

  header {
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    aside {
      width: 90%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding-top: 5px;
    }
    h4 {
      color: #ffffff;
      font-weight: 600;
      font-size: 25px;
      padding-right: 5px;
      cursor: pointer;
    }
    h3 {
      color: #ffffff;
      font-weight: 600;
      font-size: 18px;
      text-decoration: underline;
      padding-right: 5px;
      cursor: pointer;
    }
  }

  span {
    padding: 0 0 0 3px;
    background-color: #000000;
    min-width: 326px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;
    gap: 25px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
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
    //gap: 2px;

    h5 {
      font-size: 17px;
      padding: 3px 0 2px 5px;
      color: #ffffff;
      cursor: pointer;
    }
    h6 {
      font-size: 17px;
      padding: 3px 0 5px 5px;
      border-radius: 5px;
      color: #ffffff;
      cursor: pointer;
    }
  }
  section {
    width: 172px;
    height: 216px;
    background-color: #312f2f;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
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

export default StyledBoxes;
