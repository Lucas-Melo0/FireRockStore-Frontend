import StyleTop from "../../Styles/StyleTop";
import { Link } from "react-router-dom";
import { useContext } from "react";
import productContext from "./Context";

export default function Top({ handleCart }) {
  const { setVisibility } = useContext(productContext);

  function handleMenu() {
    setVisibility("visible");
  }

  return (
    <StyleTop>
      <header>
        <aside>
          <Link to={`/`}>
            <h1>🔥 Rock Store</h1>
          </Link>
          <div>
            <div>
              <ion-icon onClick={handleCart} name="cart-outline"></ion-icon>
            </div>
            <div>
              <ion-icon onClick={handleMenu} name="menu-outline"></ion-icon>
            </div>
          </div>
        </aside>
      </header>
    </StyleTop>
  );
}
