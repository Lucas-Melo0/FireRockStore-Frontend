import StyledProduct from "../Styles/StyledProduct";
import Top from "../Components/homePageSections/Top";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CheckoutButton } from "../Components/buttons/CheckoutButton";
import {
  CartWrapper,
  CartHeader,
  CartItemContainer,
  CardItemHeader,
  CardItemPrice,
} from "../Styles/cartStyles";
export default function Product() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItens, setCartItens] = useState(() =>
    localStorage.getItem("cart")
  );
  console.log(cartItens);
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
              <h5>R$ {mockItens.price} </h5> <IoIosArrowBack /> 1
              <IoIosArrowForward />
            </CardItemPrice>
            <h4>Subtotal : R$ 2500</h4>
          </CartItemContainer>

          <CheckoutButton>Close order</CheckoutButton>
        </CartWrapper>
      )}
      <Top handleCart={handleCart} />

      <StyledProduct>
        <header>
          <span>
            <h1>Frankstein Horror Mug</h1>
            <nav>
              <section>
                <img src="https://bit.ly/3BGmIGo" alt="Product Picture" />
              </section>
            </nav>

            <h1>
              Price: <p>$20.80</p>
            </h1>
          </span>
          <span>
            <h2>Description</h2>
            <p>
              With the toughness of bone china and the practicality of an
              earthenware mug, the ash is one of our most popular bone china
              shapes.
            </p>
            <footer>
              <nobr>Add to cart</nobr>
            </footer>
          </span>
        </header>
      </StyledProduct>
    </>
  );
}
