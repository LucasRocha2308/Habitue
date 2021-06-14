import { ButtonWhite } from "../Button";
import { BackCard } from "./style";
import { useHabits } from "../../providers/habits";

const MainHabit = () => {
  const { habit } = useHabits();

  return (
    <>
      {console.log(habit)}
      {habit.length > 0 ? (
        <div>Deu certo</div>
      ) : (
        <BackCard>
          <p>
            Ainda não cadastrou seu hábito, cadastre clicando no botão abaixo.
          </p>
          <ButtonWhite>
            Cadastrar <br />
            Hábitos
          </ButtonWhite>
        </BackCard>
      )}
    </>
  );
};

export default MainHabit;
