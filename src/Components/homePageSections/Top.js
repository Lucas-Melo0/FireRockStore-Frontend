import StyleTop from "../../Styles/StyleTop";

export default function Top({ handleCart }) {
  return (
    <StyleTop>
      <header>
        <aside>
          <h1>🔥 Rock Store</h1>
          <div>
            <div>
              <ion-icon onClick={handleCart} name="cart-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="menu-outline"></ion-icon>
            </div>
          </div>
        </aside>
      </header>
    </StyleTop>
  );
}
