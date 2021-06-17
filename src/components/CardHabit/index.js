import { BntRemove, CardStyle, FlexCard, ContainerButton } from "./style";
import { useHabits } from "../../providers/habits";
import { ButtonWhite } from "../Button";
import { useHistory } from "react-router-dom";
import { FaCheckCircle, TiArrowBack } from "react-icons/all";

const CardHabit = () => {
  const history = useHistory();
  const { habit, removeHabit, checkHabit } = useHabits();

  const goTo = (path) => {
    history.push(path);
  };

  return (
    <FlexCard>
      {habit.map((elem) => {
        return (
          <CardStyle key={elem.id}>
            <BntRemove onClick={() => removeHabit(elem.id)} />
            <h2>
              {elem.title.length > 10
                ? `${elem.title.substring(0, 10)}...`
                : elem.title}
            </h2>
            <label>Categoria</label>
            <p>{elem.category}</p>
            <label>Dificuldade</label>
            <p>{elem.difficulty}</p>
            <label>Frequencia do hábito</label>
            <p>{elem.frequency}</p>
            <label>Quantos pontos vale</label>
            <p>{elem.how_much_achieved}</p>
            <FaCheckCircle onClick={() => checkHabit(elem)} />
          </CardStyle>
        );
      })}
      <ContainerButton>
        <ButtonWhite onClick={() => goTo("/")}>
          <TiArrowBack />
          Home Page
        </ButtonWhite>
        <ButtonWhite onClick={() => goTo("/registerhabit")}>
          Cadastrar Hábitos
        </ButtonWhite>
      </ContainerButton>
    </FlexCard>
  );
};

export default CardHabit;
