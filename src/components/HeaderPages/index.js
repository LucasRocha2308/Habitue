import { Logo } from "../Header/styles";
import logo from "../../images/logo.svg";
import { ButtonGreen, ButtonWhite } from "../Button";
import { DivHeaderPages } from "./styles";
import MenuBurguer from "../MenuBurguer";

const HeaderPages = () => {
  return (
    <DivHeaderPages>
      <Logo src={logo} alt="logo-habitue" />
      <div className="menu-burguer">
        <MenuBurguer />
      </div>
      <div className="div-buttons">
        <ButtonWhite>Hábitos</ButtonWhite>
        <ButtonWhite>Grupos</ButtonWhite>
        <ButtonGreen>Logout</ButtonGreen>
      </div>
    </DivHeaderPages>
  );
};

export default HeaderPages;
