import HomePageStyles from "../Styles/HomePageStyles";
import HeaderOne from "../Components/homePageSections/HeaderOne";
import HeaderTwo from "../Components/homePageSections/SecondHeader";
import HeaderThree from "../Components/homePageSections/ThirdHeader";
import SalesBody from "../Components/homePageSections/SalesBody";

const HomePage = () => {
  return (
    <HomePageStyles>
      <header>
        <aside>
          <h1>Happy Fire Rock Halloween 🔥</h1>

          <div>
            <div>
              <ion-icon name="cart-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="menu-outline"></ion-icon>
            </div>
          </div>
        </aside>
      </header>
      <HeaderOne />
      {/* <HeaderTwo /> */}
      {/* <HeaderThree /> */}
      <div>
        <p>•</p>
        <p>•</p>
        <p>•</p>
      </div>

      <SalesBody />
    </HomePageStyles>
  );
};

export { HomePage };
