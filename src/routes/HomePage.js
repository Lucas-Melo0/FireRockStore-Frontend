import StyledHP from "../Styles/StyledHomePage";
import Banner from "../Components/homePageSections/Banner";
import SalesBody from "../Components/homePageSections/SalesBody";
import RegisterPopUp from "../Components/homePageSections/RegisterPopUp";
import Top from "../Components/homePageSections/Top";
import { useEffect, useState } from "react";
import {
  CartWrapper,
  CartHeader,
  CartItemContainer,
  CardItemHeader,
  CardItemPrice,
} from "../Styles/cartStyles";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { getProducts } from "../API/axiosRequests";
import { CheckoutButton } from "../Components/buttons/CheckoutButton";

const HomePage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [productList, setProductList] = useState([]);
  const [cartItens, setCartItens] = useState(
    () => JSON.parse(localStorage.getItem("cart")) ?? []
  );

  useEffect(() => {
    getProducts().then((products) => setProductList(products.data));
  }, []);

  const handleCart = () => {
    setIsCartOpen(true);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItens));
  }, [cartItens]);

  const removeItens = (id) => {
    const removeId = cartItens.filter((itens) => itens._id !== id);
    setCartItens(removeId);
  };

  return (
    <>
      {isCartOpen && (
        <CartWrapper isOpen={isCartOpen}>
          <CartHeader>
            <p>Shopping Cart</p>
            <h5 onClick={() => setIsCartOpen(false)}>X</h5>
          </CartHeader>

          {cartItens.map((value) => {
            return (
              <CartItemContainer>
                <CardItemHeader>
                  <h3 onClick={() => removeItens(value._id)}>X</h3>
                </CardItemHeader>
                <img src={value.image}></img>
                <p>{value.name}</p>
                <CardItemPrice>
                  <h5>R$ {value.price} </h5> <IoIosArrowBack /> 1
                  <IoIosArrowForward />
                </CardItemPrice>
                <h4>Subtotal : R$ 2500</h4>
              </CartItemContainer>
            );
          })}

          <CheckoutButton>Close order</CheckoutButton>
        </CartWrapper>
      )}

      <RegisterPopUp />
      <StyledHP>
        <Top handleCart={handleCart} />
        <Banner />

        <SalesBody />
      </StyledHP>
    </>
  );
};

export { HomePage };
