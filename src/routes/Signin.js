import { SignupContainer } from "../Styles/SignupStyles";
import { FormButton } from "../Components/buttons/FormButton";
import { CustomForm } from "../Components/form/CustomForm";
import { FormInput } from "../Components/form/FormInput";
import { useState } from "react";
const Signin = () => {
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
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
          placeholder="Senha"
        ></FormInput>
        <FormButton>Entrar</FormButton>
      </CustomForm>
    </SignupContainer>
  );
};

export { Signin };
