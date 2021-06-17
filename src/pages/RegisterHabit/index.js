import { ButtonWhite } from "../../components/Button";
import HeaderPages from "../../components/HeaderPages";
import imgFormHabit from "../../images/formhabit.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { Container, StyledH1 } from "../Dashboard/styles";
import { ContainerRegister, Form } from "./styles";
import { useHistory } from "react-router-dom";
import { useHabits } from "../../providers/habits";

const RegisterHabit = () => {
  const history = useHistory();
  const { registerHabit } = useHabits();
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório!"),
    difficulty: yup.string().required("Campo obrigatório!"),
    frequency: yup.string().required("Campo obrigatório!"),
    how_much_achieved: yup.string().required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const id = localStorage.getItem("@Habitue:id");

  const onSubmitFunction = (data) => {
    data.user = parseInt(id);
    registerHabit(data, history);
  };

  return (
    <Container>
      <HeaderPages />
      <ContainerRegister>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <StyledH1>Registro de Hábitos</StyledH1>
          <Input
            name="title"
            placeholder="Título do hábito"
            register={register}
            error={errors.title?.message}
          />

          <Input
            type="text"
            name="category"
            placeholder="Categoria"
            register={register}
            error={errors.category?.message}
          />

          <Input
            type="text"
            name="difficulty"
            placeholder="Dificuldade"
            register={register}
            error={errors.difficulty?.message}
          />
          <Input
            type="text"
            name="frequency"
            placeholder="Frequência do hábito"
            register={register}
            error={errors.frequency?.message}
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
        <img src={imgFormHabit} alt="" />
      </ContainerRegister>
    </Container>
  );
};

export default RegisterHabit;
