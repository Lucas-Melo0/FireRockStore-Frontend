import { useEffect, useState, useContext } from "react";
import StyledBoxes from "../../Styles/StyledBoxes";
import StyledGap from "../../Styles/StyledGap";
import axios from "axios";
import LoadingImg from "../../Styles/LoadingImg";
import { Link } from "react-router-dom";
import productContext from "./Context";

export default function SalesBody() {
  const [products, setProducts] = useState(null);
  const { setCategory } = useContext(productContext);

  useEffect(() => {
    const promise = axios.get("https://firerock.herokuapp.com/");
    promise.then((res) => {
      setProducts(res.data);
      setCategory(res.data);
    });
  }, []);

  if (products === null) {
    return (
      <LoadingImg>
        <img src="https://bit.ly/3zAxhsA" alt="Loading" />
      </LoadingImg>
    );
  }

  return (
    <StyledGap>
      {products.map((i, index) => (
        <>
          <StyledBoxes key={index}>
            <header>
              <aside>
                <Link to={`/productlist`} state={i.category}>
                  <h4>{i.title}</h4>
                </Link>
                <Link to={`/productlist`} state={i.category}>
                  <h3>See all</h3>
                </Link>
              </aside>
            </header>

            <span>
              {i?.products?.map((item, index) => (
                <Link to={`/product`} state={item}>
                  <nav>
                    <section>
                      <img src={item.image} alt="image" key={index} />
                    </section>
                    <h5>{item.name}</h5>
                    <h6>${item.price}</h6>
                  </nav>
                </Link>
              ))}
            </span>
          </StyledBoxes>
        </>
      ))}
    </StyledGap>
  );
}
