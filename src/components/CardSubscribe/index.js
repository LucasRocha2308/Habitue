import { CardStyle, FlexCard, ContainerButton } from "./style";

import { useGroups } from "../../providers/groups";
import { ButtonGreen, ButtonWhite } from "../Button";
import { useHistory } from "react-router-dom";
import { TiArrowBack } from "react-icons/all";

const CardSubscribe = () => {
  const myId = JSON.parse(localStorage.getItem("@Habitue:id"));
  const history = useHistory();
  const { subscribeGroup, subscribeToGroup } = useGroups();
  const goTo = (path) => {
    history.push(path);
  };

  const youIn = (users) => {
    return users.some((elem) => {
      return elem.id === myId;
    });
  };

  return (
    <FlexCard>
      {subscribeGroup.map((elem) => {
        return (
          <CardStyle key={elem.id}>
            <div>
              <h2>{elem.name}</h2>
            </div>
            <div>
              <p>Descrição</p>
              <div>{elem.description}</div>
            </div>
            <div>
              <p>Categoria</p>
              <div>{elem.category}</div>
            </div>
            <div>
              <p>Criador</p>
              <div>{elem.creator.username}</div>
            </div>
            <pre>
              {elem.users_on_group.length > 1
                ? `${elem.users_on_group.length} pessoas no grupo`
                : `${elem.users_on_group.length} pessoa no grupo`}
            </pre>

            {youIn(elem.users_on_group) ? (
              <ButtonWhite>Inscrito</ButtonWhite>
            ) : (
              <ButtonGreen onClick={() => subscribeToGroup(elem.id)}>
                Inscreva-se
              </ButtonGreen>
            )}
          </CardStyle>
        );
      })}
      <ContainerButton>
        <ButtonWhite onClick={() => goTo("/")}>
          <TiArrowBack />
          Home Page
        </ButtonWhite>
        <ButtonWhite onClick={() => goTo("/registergroup")}>
          Cadastrar Grupo
        </ButtonWhite>
      </ContainerButton>
    </FlexCard>
  );
};

export default CardSubscribe;
