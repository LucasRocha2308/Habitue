import { ButtonWhite } from "../../components/Button";
import HeaderPages from "../../components/HeaderPages";
import imgFormActivities from "../../images/formActivities.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { Container, StyledH1 } from "../Dashboard/styles";
import { ContainerRegister, Form } from "./styles";
import { useActivitie } from "../../providers/activities";
import { useHistory } from "react-router-dom";

const RegisterActivities = () => {
  const { registerActivitie } = useActivitie();
  const history = useHistory();
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    registerActivitie(data, history);
  };

  return (
    <Container>
      <HeaderPages />
      <ContainerRegister>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <StyledH1>Registro de Atividades</StyledH1>
          <Input
            name="title"
            placeholder="Título da Atividade"
            register={register}
            error={errors.title?.message}
          />

          <Input
            type="datetime-local"
            name="realization_time"
            placeholder="Data da realização"
            register={register}
            error={errors.realization_time?.message}
          />

          <ButtonWhite className="button" type="submit">
            Registrar
          </ButtonWhite>
        </Form>
        <img src={imgFormActivities} alt="img-activities" />
      </ContainerRegister>
    </Container>
  );
};

export default RegisterActivities;
