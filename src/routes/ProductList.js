import StyledProductList from "../Styles/StyledProductList";
import Top from "../Components/homePageSections/Top";
import Banner from "../Components/homePageSections/Banner";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingImg from "../Styles/LoadingImg";
import { useLocation } from "react-router-dom";

export default function ProductList() {
  const location = useLocation();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/productlist");
    promise.then((res) => {
      setProducts(res.data);
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
      <Top />
      <Banner />
      <StyledProductList>
        <div>All the products in this category</div>
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
      </StyledProductList>
    </>
  );
}
