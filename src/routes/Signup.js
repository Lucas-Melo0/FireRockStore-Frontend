import { useState } from "react";
import { FormButton } from "../Components/buttons/FormButton";
import { CustomForm } from "../Components/form/CustomForm";
import { FormInput } from "../Components/form/FormInput";
import { SignupContainer } from "../Styles/SignupStyles";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <SignupContainer>
      <Link to={"/"}>
        <h1>FireRock-Store</h1>
      </Link>
      <CustomForm onSubmit={handleSubmit}>
        <FormInput
          required
          onChange={handleForm}
          name="name"
          placeholder="Nome"
        ></FormInput>
        <FormInput
          required
          onChange={handleForm}
          name="email"
          placeholder="Email"
        ></FormInput>
        <FormInput
          required
          onChange={handleForm}
          type="password"
          name="password"
          placeholder="Senha"
        ></FormInput>
        <FormInput
          required
          onChange={handleForm}
          type="password"
          name="confirmation"
          placeholder="Confirme a senha"
        ></FormInput>

        <FormButton>Cadastrar</FormButton>
      </CustomForm>
      <Link to={"/entrada"}>
        <p> Já possui cadastro? ENTRAR</p>
      </Link>
    </SignupContainer>
  );
};

export { Signup };
