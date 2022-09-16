import StyledHP from "../Styles/StyledHomePage";
import Banner from "../Components/homePageSections/Banner";
import SalesBody from "../Components/homePageSections/SalesBody";
import RegisterPopUp from "../Components/homePageSections/RegisterPopUp";
import Top from "../Components/homePageSections/Top";
import { useState } from "react";
import {
  CartWrapper,
  CartHeader,
  CartItemContainer,
  CardItemHeader,
  CardItemPrice,
} from "../Styles/cartStyles";
import { CheckoutButton } from "../Components/buttons/CheckoutButton";

const HomePage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCart = () => {
    setIsCartOpen(true);
    console.log(isCartOpen);
  };

  const mockItens = {
    image:
      "https://images.kabum.com.br/produtos/fotos/115385/monitor-gamer-husky-hailstorm-led-31-5-widescreen-curvo-fhd-hmdi-dp-165hz-1ms-freesync-mo-hhs-32c_1608647420_gg.jpg",
    price: 1200.4,
    description: "Televisao 25 polegadas ",
  };

  return (
    <>
      {isCartOpen && (
        <CartWrapper isOpen={isCartOpen}>
          <CartHeader>
            <p>Shopping Cart</p>
            <h5 onClick={() => setIsCartOpen(false)}>X</h5>
          </CartHeader>
          <CartItemContainer>
            <CardItemHeader>
              <h3>X</h3>
            </CardItemHeader>
            <img src={mockItens.image}></img>
            <p>{mockItens.description}</p>
            <CardItemPrice>
              <h5>R$ {mockItens.price} </h5>
            </CardItemPrice>
            <h4>Subtotal : R$ 2500</h4>
          </CartItemContainer>
          <CartItemContainer>
            <CardItemHeader>
              <h3>X</h3>
            </CardItemHeader>
            <img src={mockItens.image}></img>
            <p>{mockItens.description}</p>
            <CardItemPrice>
              <h5>R$ {mockItens.price} </h5>
            </CardItemPrice>
            <h4>Subtotal : R$ 2500</h4>
          </CartItemContainer>
          <CartItemContainer>
            <CardItemHeader>
              <h3>X</h3>
            </CardItemHeader>
            <img src={mockItens.image}></img>
            <p>{mockItens.description}</p>
            <CardItemPrice>
              <h5>R$ {mockItens.price} </h5>
            </CardItemPrice>
            <h4>Subtotal : R$ 2500</h4>
          </CartItemContainer>
          <CartItemContainer>
            <CardItemHeader>
              <h3>X</h3>
            </CardItemHeader>
            <img src={mockItens.image}></img>
            <p>{mockItens.description}</p>
            <CardItemPrice>
              <h5>R$ {mockItens.price} </h5>
            </CardItemPrice>
            <h4>Subtotal : R$ 2500</h4>
          </CartItemContainer>
          <CartItemContainer>
            <CardItemHeader>
              <h3>X</h3>
            </CardItemHeader>
            <img src={mockItens.image}></img>
            <p>{mockItens.description}</p>
            <CardItemPrice>
              <h5>R$ {mockItens.price} </h5>
            </CardItemPrice>
            <h4>Subtotal : R$ 2500</h4>
          </CartItemContainer>
          <h3>Total : xxxxx</h3>
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
