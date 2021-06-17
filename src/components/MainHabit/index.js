import { ButtonWhite } from "../Button";
import { Container, StyledH1, DivCards, CardsContainer } from "./style";
import { useHabits } from "../../providers/habits";
import { useHistory } from "react-router-dom";
import CardHabit from "../CardHabit";

const MainHabit = () => {
  const { habit } = useHabits();
  const history = useHistory();

  const goTo = (path) => {
    history.push(path);
  };

  return (
    <Container>
      <StyledH1>Hábitos</StyledH1>
      {!habit.length ? (
        <DivCards>
          <CardsContainer>
            <p>
              Ainda não cadastrou nenhum hábito? Cadastre clicando nos botão
              abaixo.
            </p>
            <ButtonWhite onClick={() => goTo("/registerhabit")}>
              Cadastrar Hábito
            </ButtonWhite>
          </CardsContainer>
        </DivCards>
      ) : (
        <CardHabit />
      )}
    </Container>
  );
};

export default MainHabit;
