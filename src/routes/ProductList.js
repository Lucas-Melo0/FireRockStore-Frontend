import StyledProductList from "../Styles/StyledProductList";
import Top from "../Components/homePageSections/Top";
import Banner from "../Components/homePageSections/Banner";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { CheckoutCart } from "../Components/checkoutCar/CheckoutCar";
import LoadingImg from "../Styles/LoadingImg";
import { useLocation } from "react-router-dom";
import RegisterPopUp from "../Components/homePageSections/RegisterPopUp";

export default function ProductList({ cartItens, setCartItens }) {
  const location = useLocation();
  const [products, setProducts] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCart = () => {
    setIsCartOpen(true);
  };

  useEffect(() => {
    const promise = axios.get("https://firerock.herokuapp.com/products");
    promise.then((res) => {
      setProducts(res.data);
      window.scrollTo(0, 0);
    });
  }, []);

  if (products === null) {
    return (
      <LoadingImg>
        <img src="https://bit.ly/3zAxhsA" alt="Loading" />
      </LoadingImg>
    );
  }

  const category = products.filter((i) => i.category === location.state);

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
      <Banner />
      <StyledProductList>
        <div>All the products in this category</div>

        {location.state ? (
          <header>
            {category.map((item, index) =>
              item.products.map((i) => (
                <Link to={`/product`} state={i}>
                  <nav>
                    <section>
                      <img src={i.image} alt="image" key={index} />
                    </section>
                    <h5>{i.name}</h5>
                    <h6>${i.price}</h6>
                  </nav>
                </Link>
              ))
            )}
          </header>
        ) : (
          <LoadingImg>
            <img src="https://bit.ly/3SeHsdT" alt="pick a category" />
          </LoadingImg>
        )}
      </StyledProductList>
    </>
  );
}
