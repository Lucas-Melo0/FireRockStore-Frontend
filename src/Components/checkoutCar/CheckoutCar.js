import { useEffect } from "react";
import {
  CartWrapper,
  CartHeader,
  CartItemContainer,
  CardItemHeader,
  CardItemPrice,
} from "../../Styles/cartStyles";
import { CheckoutButton } from "../buttons/CheckoutButton";
import { useState } from "react";
import { orderCheckout } from "../../API/axiosRequests";
const CheckoutCart = ({
  cartItens,
  setCartItens,
  isCartOpen,
  setIsCartOpen,
}) => {
  const [auth, setAuth] = useState(() =>
    JSON.parse(localStorage.getItem("auth"))
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItens));
  }, [cartItens]);

  const removeItens = (id, category) => {
    const removeId = cartItens.filter(
      (itens) => itens.productId !== id && itens.category !== category
    );
    setCartItens(removeId);
  };

  const itensSum = () => {
    let result = 0;
    cartItens.map((iten) => (result += iten.price));
    return result;
  };
  console.log(cartItens);
  const checkoutOrder = () => {
    if (!auth) return alert("Please login before checkout");

    try {
      const id = cartItens.map((iten) => iten.productId);
      const category = cartItens.map((iten) => iten.category);
      orderCheckout({ id, category, token: auth.token }).then(() =>
        setCartItens([])
      );
      setIsCartOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartWrapper isOpen={isCartOpen}>
      <CartHeader>
        <p>Shopping Cart</p>
        <h5 onClick={() => setIsCartOpen(false)}>X</h5>
      </CartHeader>
      {cartItens.map((value) => {
        return (
          <CartItemContainer>
            <CardItemHeader>
              <h3 onClick={() => removeItens(value.productId)}>X</h3>
            </CardItemHeader>
            <img src={value.image}></img>
            <p>{value.name}</p>
            <CardItemPrice>
              <h5>${value.price} </h5>
            </CardItemPrice>
          </CartItemContainer>
        );
      })}
      <h3>Total: ${itensSum()} </h3>
      <CheckoutButton onClick={checkoutOrder}>Close order</CheckoutButton>
    </CartWrapper>
  );
};
export { CheckoutCart };
