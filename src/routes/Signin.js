import { SignupContainer } from "../Styles/SignupStyles";
import { FormButton } from "../Components/buttons/FormButton";
import { CustomForm } from "../Components/form/CustomForm";
import { FormInput } from "../Components/form/FormInput";
import { userSignin } from "../API/axiosRequests";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Signin = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await userSignin(form);
      localStorage.setItem("auth", JSON.stringify(data));
      navigate("/");
    } catch (err) {
      const { status } = err.response;
      if (status === 404) return alert("Email or password is incorrect.");
    }
  };
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <SignupContainer onSubmit={handleSubmit}>
      <h1>FireRock-Store</h1>
      <CustomForm>
        <FormInput
          onChange={handleForm}
          name="email"
          required
          type="email"
          placeholder="Email"
        ></FormInput>
        <FormInput
          onChange={handleForm}
          name="password"
          required
          type="password"
          placeholder="Password"
        ></FormInput>
        <FormButton>Login</FormButton>
        <Link to={"/cadastro"}>
          <p> Don't have an account yet? Sign up!</p>
        </Link>
      </CustomForm>
    </SignupContainer>
  );
};

export { Signin };
