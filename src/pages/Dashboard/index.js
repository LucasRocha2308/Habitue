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
            valueDescription="Você tem qtd hábitos cadastrados para informações detalhadas vá para hábitos"
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
          valueDescription="Você tem qtd Grupos cadastrados para informações detalhadas vá para Grupos"
          textButton="Grupos"
          handleClick={handleGroups}
        />
      </DivCards>
    </Container>
  );
};

export default Dashboard;
