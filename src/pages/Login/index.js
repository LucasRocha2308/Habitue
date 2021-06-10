import { Container, ContainerForm, ContainerLogin } from "./styles";
import imageLogin from "../../images/login.svg";
import logo from "../../images/logo.svg";
import { ButtonGreen } from "../../components/Button";
import { Link } from "react-router-dom";
import { FiUser, FiLock } from "react-icons/fi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
const Login = () => {
  const schema = yup.object().shape({
    login: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmitFunction = (data) => {};
  return (
    <Container>
      <img src={imageLogin} alt="imagem de Login" />
      <ContainerLogin>
        <ContainerForm>
          <img src={logo} alt="logo-habitue" />
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Acesse sua conta</h2>
            <Input
              register={register}
              name="login"
              icon={FiUser}
              label="Login"
              error={errors.login?.message}
            />

            <Input
              type="password"
              icon={FiLock}
              name="password"
              label="Senha"
              register={register}
              error={errors.password?.message}
            />
            <ButtonGreen>Entrar</ButtonGreen>
            <h4>
              Ainda sem conta? <Link to="/register">Cadastre-se aqui!</Link>
            </h4>
          </form>
        </ContainerForm>
      </ContainerLogin>
    </Container>
  );
};
export default Login;
