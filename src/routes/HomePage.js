import HomePageStyles from "../Styles/HomePageStyles";
import HeaderOne from "../Components/homePageSections/HeaderOne";
import HeaderTwo from "../Components/homePageSections/SecondHeader";
import HeaderThree from "../Components/homePageSections/ThirdHeader";
import SalesBody from "../Components/homePageSections/SalesBody";
import StyledPopUp from "../Styles/StyledRegisterPopUp";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <HomePageStyles>
        <header>
          <aside>
            <h1>🔥 Rock Store</h1>
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

        <StyledPopUp>
          <span>
            <Link to={`/entrada`}>
              <div> Sign In </div>
            </Link>
            <Link to={`/cadastro`}>
              <div> Sign Up </div>
            </Link>
          </span>
        </StyledPopUp>

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
    </>
  );
};

export { HomePage };
