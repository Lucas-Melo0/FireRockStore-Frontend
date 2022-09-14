import styled from "styled-components";

const CustomForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  input {
    all: unset;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    background-color: #ffffff;
    height: 58px;
    border-radius: 5px;
    color: #000000;
    font-size: 20px;
  }
`;

export { CustomForm };
