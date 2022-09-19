import styled from "styled-components";

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  min-height: 80vh;
  max-height: 80vh;
  overflow-y: auto;
  z-index: 1;
  row-gap: 10px;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: #0c0c0c;
  h3 {
    color: white;
  }
`;

const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #4b4b4b;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  color: #ffffff;
  height: 40px;
  p {
    font-size: 23px;
  }
  h5 {
    cursor: pointer;
  }
`;

const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 250px;
  border: 1px solid gray;
  border-radius: 5px;
  row-gap: 7px;
  text-align: center;
  background-color: white;
  img {
    height: 120px;
    width: 120px;
  }
  p {
    font-size: 20px;
    color: #2f74c7;
  }
`;
const CardItemHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 5px;
  h3 {
    cursor: pointer;
    color: #000000;
    font-weight: 700;
  }
`;

const CardItemPrice = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  column-gap: 6px;
  justify-content: center;
`;

export {
  CartWrapper,
  CartHeader,
  CartItemContainer,
  CardItemHeader,
  CardItemPrice,
};
