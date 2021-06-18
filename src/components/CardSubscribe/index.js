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
              <h2>
                {elem.name.length > 8
                  ? `${elem.name.substring(0, 8)}...`
                  : elem.name}
              </h2>
            </div>
            <div>
              <p>Descrição</p>
              <pre>
                {elem.description.length > 15
                  ? `${elem.description.substring(0, 15)}...`
                  : elem.description}
              </pre>
            </div>
            <div>
              <p>Categoria</p>
              <pre>
                {elem.category.length > 15
                  ? `${elem.category.substring(0, 15)}...`
                  : elem.category}
              </pre>
            </div>
            <div>
              <p>Criador</p>
              <pre>
                {elem.creator.username.length > 7
                  ? `${elem.creator.username.substring(0, 7)}...`
                  : elem.creator.username}
              </pre>
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
