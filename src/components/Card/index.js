import { ButtonWhite } from "../Button/index";
import { DivCard } from "./styles";

const Card = ({
  valueTitle,
  valueDescription,
  textButton,
  handleClick,
  children,
}) => {
  return (
    <DivCard>
      <h2>{valueTitle}</h2>
      <p>{valueDescription}</p>
      {children}
      <ButtonWhite onClick={handleClick}>{textButton}</ButtonWhite>
    </DivCard>
  );
};

export default Card;
