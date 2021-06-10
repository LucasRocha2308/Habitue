import { Container, ContainerForm, ContainerRegister } from "./styles";
import imageRegister from "../../images/register.svg";
import logo from "../../images/logo.svg";
import { ButtonGreen } from "../../components/Button";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";

const Register = () => {
  const schema = yup.object().shape({
    usuario: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required(),
    email: yup.string().required("Campo obrigatório").email("E-mail invalido"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmitFunction = (data) => {};
  return (
    <Container>
      <img src={imageRegister} alt="imagem de Cadastro" />
      <ContainerRegister>
        <ContainerForm>
          <img src={logo} alt="logo-habitue" />
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Faça seu cadastro</h2>
            <Input
              register={register}
              icon={FiUser}
              name="usuario"
              label="Usuario"
              error={errors.usuario?.message}
            />
            <div>
              <Input
                icon={FiLock}
                type="password"
                name="password"
                label="Senha"
                register={register}
                error={errors.password?.message}
              />
              <Input
                type="password"
                icon={FiLock}
                name="passwordConfirm"
                label="Confirme a senha"
                register={register}
                error={errors.passwordConfirm?.message}
              />
            </div>
            <Input
              icon={FiMail}
              name="email"
              label="Email"
              register={register}
              error={errors.email?.message}
            />
            <ButtonGreen>Cadastrar</ButtonGreen>
            <h4>
              Já tem conta? <Link to="/login">Faça o login!</Link>
            </h4>
          </form>
        </ContainerForm>
      </ContainerRegister>
    </Container>
  );
};
export default Register;
