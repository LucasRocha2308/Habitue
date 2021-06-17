import { BntRemove, CardStyle, FlexCard, Bnt, ContainerButton } from "./style";
import { useState } from "react";
import { useGroups } from "../../providers/groups";
import { ButtonWhite } from "../Button";
import { useHistory } from "react-router-dom";
import TransitionsModalGroup from "../ModalGroup";
import { useGoal } from "../../providers/goals";
import { TiArrowBack } from "react-icons/all";
const CardGroup = () => {
  const history = useHistory();
  const { group, removeGroup } = useGroups();
  const [open, setOpen] = useState(false);
  const { setGroupId } = useGoal();

  const handleOpen = (id) => {
    setOpen(true);
    localStorage.setItem(`@Habitue:Group`, id);
    setGroupId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goTo = (path) => {
    history.push(path);
  };

  return (
    <FlexCard>
      {group.map((elem) => {
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
              <p>Categoria</p>
              <pre>
                {elem.category.length > 15
                  ? `${elem.category.substring(0, 15)}...`
                  : elem.category}
              </pre>
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
              <p>Criador</p>
              <pre>
                {elem.creator.username.length > 7
                  ? `${elem.creator.username.substring(0, 7)}...`
                  : elem.creator.username}
              </pre>
            </div>
            <div>
              <TransitionsModalGroup open={open} handleClose={handleClose} />
              <Bnt onClick={() => handleOpen(elem.id)}>Metas e Atividades</Bnt>
            </div>
            <pre>
              {elem.users_on_group.length > 1
                ? `${elem.users_on_group.length} pessoas no grupo`
                : `${elem.users_on_group.length} pessoa no grupo`}
            </pre>
            <BntRemove onClick={() => removeGroup(elem.id)} />
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

export default CardGroup;
