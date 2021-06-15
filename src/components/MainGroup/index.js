import { ButtonWhite } from "../Button";

import { Container, StyledH1, DivCards, CardsContainer } from "./styles";

const MainGroup = () => {
  return (
    <Container>
      <StyledH1>Grupos</StyledH1>
      <DivCards>
        <CardsContainer>
          <p>
            Ainda não cadastrou em nenhum grupo? Cadastre clicando nos botão
            abaixo.
          </p>
          <div>
            <ButtonWhite>Cadastrar Grupo</ButtonWhite>
            <ButtonWhite>Entrar em Grupos</ButtonWhite>
          </div>
        </CardsContainer>
      </DivCards>
    </Container>
  );
};

export default MainGroup;
