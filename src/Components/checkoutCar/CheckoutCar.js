import { useEffect } from "react";
import {
  CartWrapper,
  CartHeader,
  CartItemContainer,
  CardItemHeader,
  CardItemPrice,
} from "../../Styles/cartStyles";
import { CheckoutButton } from "../buttons/CheckoutButton";
const CheckoutCart = ({
  cartItens,
  setCartItens,
  isCartOpen,
  setIsCartOpen,
}) => {
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItens));
  }, [cartItens]);

  const removeItens = (id, category) => {
    const removeId = cartItens.filter(
      (itens) => itens.productId !== id && itens.category !== category
    );
    setCartItens(removeId);
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
              <h5>R$ {value.price} </h5>
            </CardItemPrice>
          </CartItemContainer>
        );
      })}
      <h3>Total </h3>
      <CheckoutButton>Close order</CheckoutButton>
    </CartWrapper>
  );
};
export { CheckoutCart };
