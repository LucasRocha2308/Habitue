import { ButtonGreen } from "../../components/Button";
import Header from "../../components/Header";
import imagePorquinho from "../../images/porquinho.svg";
import { DivHome } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <DivHome>
        <div>
          <h2>Criei o hábito de se organizar financeiramente</h2>
          <ButtonGreen>Saiba mais</ButtonGreen>
        </div>
        <img src={imagePorquinho} alt="img-porquinho" />
      </DivHome>
    </>
  );
};

export default Home;
