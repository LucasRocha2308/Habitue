import { Logo } from "../Header/styles";
import logo from "../../images/logo.svg";
import { ButtonGreen, ButtonWhite } from "../Button";
import { DivHeaderPages } from "./styles";
import MenuBurguer from "../MenuBurguer";
import { useHistory } from "react-router-dom";

const HeaderPages = () => {
  const history = useHistory();

  const goTo = (path) => {
    history.push(path);
  };

  const handlerLogout = () => {
    localStorage.clear();
    document.location.reload();
  };

  return (
    <DivHeaderPages>
      <Logo src={logo} alt="logo-habitue" onClick={() => history.push("/")} />
      <div className="menu-burguer">
        <MenuBurguer />
      </div>
      <div className="div-buttons">
        <ButtonWhite onClick={() => goTo("/habit")}>Hábitos</ButtonWhite>
        <ButtonWhite onClick={() => goTo("/group")}>Grupos</ButtonWhite>
        <ButtonWhite onClick={() => goTo("/subscribegroup")}>
          Entrar grupos
        </ButtonWhite>
        <ButtonGreen onClick={handlerLogout}>Logout</ButtonGreen>
      </div>
    </DivHeaderPages>
  );
};

export default HeaderPages;
