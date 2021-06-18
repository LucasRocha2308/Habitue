import { useHistory } from "react-router-dom";
import Card from "../../components/Card";
import HeaderPages from "../../components/HeaderPages";
import { useUser } from "../../providers/user";
import { useHabits } from "../../providers/habits";
import { DivCards, StyledH1, Container } from "./styles";
import { useGroups } from "../../providers/groups";
import ChangeUser from "../../components/ChangeUser";

const Dashboard = () => {
  const { user } = useUser();
  const { habit } = useHabits();
  const { group } = useGroups();

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
      <StyledH1>
        Olá, {user}! <ChangeUser />
      </StyledH1>

      <DivCards>
        {!habit.length ? (
          <Card
            valueTitle="Hábitos"
            valueDescription="Está sem hábitos para controlar melhor seu dinheiro, clique abaixo e cadastre alguns."
            textButton="Hábitos"
            handleClick={handleHabits}
          />
        ) : (
          <Card
            valueTitle="Hábitos"
            textButton="Hábitos"
            handleClick={handleHabits}
          >
            Você tem{" "}
            {habit.length > 1
              ? `${habit.length}  hábitos cadastrados`
              : `${habit.length}  hábito cadastrado`}{" "}
            para informações detalhadas vá para hábitos.
          </Card>
        )}

        {!group.length ? (
          <Card
            valueTitle="Grupos"
            valueDescription="Ainda não está buscando o milhão? Cadastre no grupo e juntos vamos organizar nosso orçamento."
            textButton="Grupos"
            handleClick={handleGroups}
          />
        ) : (
          <Card
            valueTitle="Grupos"
            textButton="Grupos"
            handleClick={handleGroups}
          >
            Você está cadastrado em{" "}
            {group.length > 1
              ? `${group.length}  grupos`
              : `${group.length}  grupo`}
            , para informações detalhadas vá para grupos.
          </Card>
        )}
      </DivCards>
    </Container>
  );
};

export default Dashboard;
