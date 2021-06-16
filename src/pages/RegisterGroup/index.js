import { ButtonWhite } from "../../components/Button";
import HeaderPages from "../../components/HeaderPages";
import imgFormGroup from "../../images/formgroup.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { Container, StyledH1 } from "../Dashboard/styles";
import { ContainerRegister, Form } from "./styles";
import { useHistory } from "react-router-dom";
import { useGroups } from "../../providers/groups";

const RegisterGroup = () => {
  const history = useHistory();
  const { registerGroup } = useGroups();
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório!"),
    category: yup.string().required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const id = localStorage.getItem("@Habitue:id");

  const onSubmitFunction = (data) => {
    data.user = parseInt(id);
    registerGroup(data, history);
  };

  return (
    <Container>
      <HeaderPages />
      <ContainerRegister>
        <img src={imgFormGroup} alt="" />
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <StyledH1>Registro de Grupos</StyledH1>
          <Input
            name="name"
            placeholder="Nome do grupo"
            register={register}
            error={errors.name?.message}
          />
          <Input
            type="text"
            name="category"
            placeholder="Categoria"
            register={register}
            error={errors.category?.message}
          />
          <TextArea
            type="text"
            name="description"
            placeholder="Descrição"
            register={register}
            error={errors.description?.message}
          />

          <ButtonWhite className="button" type="submit">
            Registrar
          </ButtonWhite>
        </Form>
      </ContainerRegister>
    </Container>
  );
};

export default RegisterGroup;
