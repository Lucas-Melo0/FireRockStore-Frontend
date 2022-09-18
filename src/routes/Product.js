import StyledProduct from "../Styles/StyledProduct";
import Top from "../Components/homePageSections/Top";
import { useLocation } from "react-router-dom";

export default function Product() {
  const location = useLocation();

  console.log(location.state);

  return (
    <>
      <Top />

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
              <nobr>Add to cart</nobr>
            </footer>
          </span>
        </header>
      </StyledProduct>
    </>
  );
}
