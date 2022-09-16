import { HomePage } from "./routes/HomePage";
import ProductList from "./routes/ProductList";
import Product from "./routes/Product";
import { Signin } from "./routes/Signin";
import { Signup } from "./routes/Signup";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./Styles/Globalcss";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/entrada" element={<Signin />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
