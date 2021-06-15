import { ButtonWhite } from "../Button";
import { BackCard } from "./style";
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
    <>
      {console.log(habit)}
      {habit.length > 0 ? (
        <CardHabit />
      ) : (
        <BackCard>
          <p>
            Ainda não cadastrou seu hábito, cadastre clicando no botão abaixo.
          </p>
          <ButtonWhite onClick={() => goTo("/registerhabit")}>
            Cadastrar <br />
            Hábitos
          </ButtonWhite>
        </BackCard>
      )}
    </>
  );
};

export default MainHabit;
