import StyledProduct from "../Styles/StyledProduct";
import Top from "../Components/homePageSections/Top";

export default function Product() {
  return (
    <>
      <Top />

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
