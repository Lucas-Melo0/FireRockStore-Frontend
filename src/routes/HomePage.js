import HomePageStyles from "../Styles/HomePageStyles";
import HeaderOne from "../Components/homePageSections/HeaderOne";
import HeaderTwo from "../Components/homePageSections/SecondHeader";
import HeaderThree from "../Components/homePageSections/ThirdHeader";
import SalesBody from "../Components/homePageSections/SalesBody";
import StyledPopUp from "../Styles/StyledRegisterPopUp";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  CartWrapper,
  CartHeader,
  CartItemContainer,
  CardItemHeader,
  CardItemPrice,
} from "../Styles/cartStyles";

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
      </CartWrapper>
      <HomePageStyles>
        <header>
          <aside>
            <h1>🔥 Rock Store</h1>
            <div>
              <div>
                <ion-icon onClick={handleCart} name="cart-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="menu-outline"></ion-icon>
              </div>
            </div>
          </aside>
        </header>

        <StyledPopUp>
          <span>
            <Link to={`/entrada`}>
              <div> Sign In </div>
            </Link>
            <Link to={`/cadastro`}>
              <div> Sign Up </div>
            </Link>
          </span>
        </StyledPopUp>

        <HeaderOne />
        {/* <HeaderTwo /> */}
        {/* <HeaderThree /> */}
        <div>
          <p>•</p>
          <p>•</p>
          <p>•</p>
        </div>

        <SalesBody />
      </HomePageStyles>
    </>
  );
};

export { HomePage };
