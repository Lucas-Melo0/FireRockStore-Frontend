import { HomePage } from "./routes/HomePage";
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
      </Routes>
    </>
  );
}

export default App;
