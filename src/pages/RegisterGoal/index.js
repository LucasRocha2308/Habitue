import { ButtonWhite } from "../../components/Button";
import HeaderPages from "../../components/HeaderPages";
import imgFormGoal from "../../images/metas.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { Container, StyledH1 } from "../Dashboard/styles";
import { ContainerRegister, Form } from "../RegisterHabit/styles";
import { useGoal } from "../../providers/goals";
import { useHistory } from "react-router-dom";

const RegisterGoal = () => {
  const history = useHistory();
  const { registerGoals } = useGoal();
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório!"),
    how_much_achieved: yup.string().required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    registerGoals(data, history);
  };

  return (
    <Container>
      <HeaderPages />
      <ContainerRegister>
        <img src={imgFormGoal} alt="img-goal" />
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <StyledH1>Registro de Metas</StyledH1>
          <Input
            name="title"
            placeholder="Título da meta"
            register={register}
            error={errors.title?.message}
          />

          <Input
            type="text"
            name="difficulty"
            placeholder="Dificuldade"
            register={register}
            error={errors.difficulty?.message}
          />

          <Input
            type="number"
            name="how_much_achieved"
            placeholder="Quantos pontos vale"
            register={register}
            error={errors.how_much_achieved?.message}
          />

          <ButtonWhite className="button" type="submit">
            Registrar
          </ButtonWhite>
        </Form>
      </ContainerRegister>
    </Container>
  );
};

export default RegisterGoal;
