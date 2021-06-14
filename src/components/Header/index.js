import { DivButtons, DivHeader, Logo } from "./styles";
import logo from "../../images/logo.svg";
import { ButtonGreen, ButtonWhite } from "../Button";
import { useHistory } from "react-router";
const Header = () => {
  const history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };
  const handleRegister = () => {
    history.push("/register");
  };

  return (
    <DivHeader>
      <Logo src={logo} alt="logo-habitue" onClick={() => history.push("/")} />
      <DivButtons>
        <ButtonGreen onClick={handleLogin}>Login</ButtonGreen>
        <ButtonWhite onClick={handleRegister}>Cadastre</ButtonWhite>
      </DivButtons>
    </DivHeader>
  );
};

export default Header;
