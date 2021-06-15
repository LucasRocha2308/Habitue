import { BntRemove, CardStyle, FlexCard } from "./style";
import { useHabits } from "../../providers/habits";
import { ButtonWhite } from "../Button";
import { useHistory } from "react-router-dom";

const CardHabit = () => {
  const history = useHistory();
  const { habit, removeHabit } = useHabits();

  const goTo = (path) => {
    history.push(path);
  };

  return (
    <FlexCard>
      {habit.map((elem) => {
        return (
          <CardStyle key={elem.id}>
            <BntRemove onClick={() => removeHabit(elem.id)} />
            <h2>{elem.title}</h2>
            <p>{elem.category}</p>
            <p>{elem.difficulty}</p>
            <p>{elem.frequency}</p>
            <p>{elem.how_much_achieved}</p>
          </CardStyle>
        );
      })}

      <ButtonWhite onClick={() => goTo("/registerhabit")}>
        Cadastrar <br /> Hábitos
      </ButtonWhite>
      <ButtonWhite onClick={() => goTo("/")}>
        Home <br /> Page
      </ButtonWhite>
    </FlexCard>
  );
};

export default CardHabit;
