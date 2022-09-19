import StyledProduct from "../Styles/StyledProduct";
import Top from "../Components/homePageSections/Top";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CheckoutCart } from "../Components/checkoutCar/CheckoutCar";
import RegisterPopUp from "../Components/homePageSections/RegisterPopUp";

export default function Product({ cartItens, setCartItens }) {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCart = () => {
    setIsCartOpen(true);
  };
  const addItens = (iten) => {
    setCartItens([...cartItens, iten]);
  };

  return (
    <>
      <RegisterPopUp />
      {isCartOpen && (
        <CheckoutCart
          cartItens={cartItens}
          setCartItens={setCartItens}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />
      )}
      <Top handleCart={handleCart} />

      <StyledProduct>
        <header>
          <span>
            <h1>{location.state.name}</h1>
            <nav>
              <section>
                <img src={location.state.image} alt="Product Picture" />
              </section>
            </nav>

            <h1>
              Price: <p>${location.state.price}</p>
            </h1>
          </span>
          <span>
            <h2>Description</h2>
            <p>{location.state.description}</p>
            <footer>
              <nobr onClick={() => addItens(location.state)}>Add to cart</nobr>
            </footer>
          </span>
        </header>
      </StyledProduct>
    </>
  );
}
