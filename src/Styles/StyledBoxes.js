import styled from "styled-components";

const StyledBoxes = styled.div`
  min-width: 326px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #1b0b23;
  padding-bottom: 20px;
  gap: 20px;

  header {
    width: 100%;
    height: 30px;

    h3 {
      color: #ffffff;
      font-weight: 600;
      font-size: 15px;
      text-decoration: underline;
      padding-right: 5px;
    }
  }

  span {
    padding: 15px 0 15px 20px;
    background-color: #361b54;
    min-width: 326px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;
    gap: 15px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  nav {
    max-width: 172px;
    width: 100%;
    height: 255px;
    background-color: #312f2f;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.25);

    h5 {
      font-size: 16px;
      padding: 3px 0 2px 5px;
      color: #ffffff;
    }
    h6 {
      padding: 3px 0 5px 5px;
      border-radius: 5px;
      color: #ffffff;
    }
  }
  section {
    width: 172px;
    height: 216px;
    background-color: #4c1365;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    img {
      width: 172px;
      height: 216px;
      border-radius: 9px;
      object-fit: cover;
    }
  }
`;

export default StyledBoxes;
