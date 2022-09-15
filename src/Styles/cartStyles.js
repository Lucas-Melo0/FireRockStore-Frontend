import styled from "styled-components";

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  width: 350px;
  min-height: 600px;
  max-height: 600px;
  overflow-y: auto;
  z-index: 1;
  row-gap: 10px;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
`;

const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #223f54;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  color: #ffffff;
  height: 40px;
  p {
    font-size: 23px;
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
`;

const CardItemPrice = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export {
  CartWrapper,
  CartHeader,
  CartItemContainer,
  CardItemHeader,
  CardItemPrice,
};
