import { ButtonWhite } from "../Button";
import { BackCard } from "./style";
import { useHabits } from "../../providers/habits";
import { useHistory } from "react-router-dom";

const MainHabit = () => {
  const { habit } = useHabits();
  const history = useHistory();
  const handleHabitsRegister = () => {
    return history.push("/registerhabit");
  };
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
          <ButtonWhite onClick={handleHabitsRegister}>
            Cadastrar <br />
            Hábitos
          </ButtonWhite>
        </BackCard>
      )}
    </>
  );
};

export default MainHabit;
