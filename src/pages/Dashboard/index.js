import { useHistory } from "react-router-dom";
import Card from "../../components/Card";
import HeaderPages from "../../components/HeaderPages";
import { useUser } from "../../providers/user";
import { useHabits } from "../../providers/habits";

import { DivCards, StyledH1, Container } from "./styles";

const Dashboard = () => {
  const { user } = useUser();
  const { habit } = useHabits();

  const history = useHistory();
  const handleHabits = () => {
    return history.push("/habit");
  };
  const handleGroups = () => {
    return history.push("/group");
  };

  return (
    <Container>
      <HeaderPages />
      <StyledH1>Olá, {user}</StyledH1>

      <DivCards>
        {habit.length ? (
          <Card
            valueTitle="Hábitos"
            valueDescription="Está sem hábitos para controlar melhor seu dinheiro, clique abaixo e cadastre alguns."
            textButton="Hábitos"
            handleClick={handleHabits}
          />
        ) : (
          <Card
            valueTitle="Hábitos"
            valueDescription="Voce tem 10 habitos"
            textButton="Hábitos"
            handleClick={handleHabits}
          />
        )}

        <Card
          valueTitle="Grupos"
          valueDescription="Ainda não está buscando o milhão? Cadastre no grupo para colocar suas metas."
          textButton="Grupos"
          handleClick={handleGroups}
        />
      </DivCards>
    </Container>
  );
};

export default Dashboard;
