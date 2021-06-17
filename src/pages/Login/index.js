import { Container, ContainerForm, ContainerLogin, NavLink } from "./styles";
import imageLogin from "../../images/login.svg";
import logo from "../../images/logo.svg";
import { ButtonGreen } from "../../components/Button";
import { FiUser, FiLock } from "react-icons/fi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { useAuth } from "../../providers/auth";
import { useHistory } from "react-router-dom";
const Login = () => {
  const { signIn } = useAuth();
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const history = useHistory();
  const onSubmitFunction = (data) => {
    signIn(data, history);
  };
  return (
    <Container>
      <img src={imageLogin} alt="imagem de Login" />
      <ContainerLogin>
        <ContainerForm>
          <NavLink to="/">
            <img src={logo} alt="logo-habitue" />
          </NavLink>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Acesse sua conta</h2>
            <Input
              register={register}
              name="username"
              icon={FiUser}
              label="Usuario"
              error={errors.username?.message}
              placeholder="Insira o usuário"
            />

            <Input
              type="password"
              icon={FiLock}
              name="password"
              label="Senha"
              register={register}
              error={errors.password?.message}
              placeholder="Insira a senha"
            />
            <ButtonGreen type="submit">Entrar</ButtonGreen>
            <h4>
              Ainda sem conta?{" "}
              <NavLink to="/register">Cadastre-se aqui!</NavLink>
            </h4>
          </form>
        </ContainerForm>
      </ContainerLogin>
    </Container>
  );
};
export default Login;
