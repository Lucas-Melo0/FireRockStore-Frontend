import StyledHP from "../Styles/StyledHomePage";
import Banner from "../Components/homePageSections/Banner";
import SalesBody from "../Components/homePageSections/SalesBody";
import RegisterPopUp from "../Components/homePageSections/RegisterPopUp";
import Top from "../Components/homePageSections/Top";
import { useState } from "react";

import { CheckoutCart } from "../Components/checkoutCar/CheckoutCar";

const HomePage = ({ cartItens, setCartItens }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCart = () => {
    setIsCartOpen(true);
  };

  return (
    <>
      {isCartOpen && (
        <CheckoutCart
          cartItens={cartItens}
          setCartItens={setCartItens}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />
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
