import { ButtonWhite } from "../Button";
import { BackCard } from "./style";

const MainHabit = () => {
  return (
    <>
      <BackCard>
        <p>
          Ainda não cadastrou seu hábito, cadastre clicando no botão abaixo.
        </p>
        <ButtonWhite>
          Cadastrar <br />
          Hábitos
        </ButtonWhite>
      </BackCard>
    </>
  );
};

export default MainHabit;
