import { useHistory } from "react-router-dom";
import { useGroups } from "../../providers/groups";
import { ButtonWhite } from "../Button";
import CardGroup from "../CardGroup";

import { Container, StyledH1, DivCards, CardsContainer } from "./styles";

const MainGroup = () => {
  const history = useHistory();
  const { group } = useGroups();

  const goTo = (path) => {
    history.push(path);
  };
  return (
    <Container>
      <StyledH1>Grupos</StyledH1>
      {!group.length ? (
        <DivCards>
          <CardsContainer>
            <p>
              Ainda não cadastrou em nenhum grupo? Cadastre clicando no botão
              abaixo.
            </p>
            <ButtonWhite onClick={() => goTo("/registergroup")}>
              Cadastrar Grupo
            </ButtonWhite>
          </CardsContainer>
        </DivCards>
      ) : (
        <CardGroup />
      )}
    </Container>
  );
};

export default MainGroup;
