import { DivButtons, DivHeader, Logo } from "./styles";
import logo from "../../images/logo.svg";
import { ButtonGreen, ButtonWhite } from "../Button";
const Header = () => {
  return (
    <DivHeader>
      <Logo src={logo} alt="logo-habitue" />
      <DivButtons>
        <ButtonGreen>Login</ButtonGreen>
        <ButtonWhite>Cadastre</ButtonWhite>
      </DivButtons>
    </DivHeader>
  );
};

export default Header;
