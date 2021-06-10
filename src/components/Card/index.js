import { ButtonWhite } from "../Button/index";
import { DivCard } from "./styles";

const Card = ({ valueTitle, valueDescription, textButton }) => {
  return (
    <DivCard>
      <h2>{valueTitle}</h2>
      <p>{valueDescription}</p>
      <ButtonWhite>{textButton}</ButtonWhite>
    </DivCard>
  );
};

export default Card;
