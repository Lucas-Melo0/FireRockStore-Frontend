import { HomePage } from "./routes/HomePage";
import ProductList from "./routes/ProductList";
import Product from "./routes/Product";
import { Signin } from "./routes/Signin";
import { Signup } from "./routes/Signup";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./Styles/Globalcss";
import productContext from "./Components/homePageSections/Context";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState(null);
  const [visibility, setVisibility] = useState("hidden");
  const [cartItens, setCartItens] = useState(
    () => JSON.parse(localStorage.getItem("cart")) ?? []
  );

  return (
    <productContext.Provider
      value={{ category, setCategory, setVisibility, visibility }}
    >
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage cartItens={cartItens} setCartItens={setCartItens} />
          }
        />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/entrada" element={<Signin />} />
        <Route
          path="/productlist"
          element={
            <ProductList cartItens={cartItens} setCartItens={setCartItens} />
          }
        />
        <Route
          path="/product"
          element={
            <Product cartItens={cartItens} setCartItens={setCartItens} />
          }
        />
      </Routes>
    </productContext.Provider>
  );
}

export default App;
