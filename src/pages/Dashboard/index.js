import Card from "../../components/Card";
import HeaderPages from "../../components/HeaderPages";
import { DivCards, StyledH1, Bo } from "./styles";
// import "./styles.css";

const Dashboard = () => {
  return (
    <Bo>
      <HeaderPages />
      <StyledH1>Olá, Fulano</StyledH1>
      <DivCards>
        <Card
          valueTitle="Hábitos"
          valueDescription="Você tem qtd hábitos cadastrados para informações detalhadas vá para hábitos"
          textButton="Hábitos"
        />
        <Card
          valueTitle="Grupos"
          valueDescription="Você tem qtd Grupos cadastrados para informações detalhadas vá para Grupos"
          textButton="Grupos"
        />
      </DivCards>
    </Bo>
  );
};

export default Dashboard;
