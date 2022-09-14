import { FormButton } from "../Components/buttons/FormButton";
import { CustomForm } from "../Components/form/CustomForm";
import { FormInput } from "../Components/FormInput";
import { SignupContainer } from "../Styles/SignupStyles";

const Signup = () => {
  return (
    <SignupContainer>
      <p>FireRock-Store</p>
      <CustomForm>
        <FormInput placeholder="Nome"></FormInput>
        <FormInput placeholder="Email"></FormInput>
        <FormInput placeholder="Senha"></FormInput>
        <FormInput placeholder="Confirme a senha"></FormInput>
        <FormButton>Confirmar</FormButton>
      </CustomForm>
    </SignupContainer>
  );
};

export { Signup };
