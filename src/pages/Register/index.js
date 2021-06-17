import { Container, ContainerForm, ContainerRegister, NavLink } from "./styles";
import imageRegister from "../../images/register.svg";
import logo from "../../images/logo.svg";
import { ButtonGreen } from "../../components/Button";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";

const Register = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos!")
      .required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Obrigatório!"),
    email: yup.string().required("Campo obrigatório!").email("E-mail invalido"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();
  const onSubmitFunction = ({ username, email, password }) => {
    const user = { username, email, password };
    api
      .post("users/", user)
      .then((_) => {
        toast.success("Sucesso ao criar a conta");
        return history.push("/login");
      })
      .catch((_) => {
        toast.error(" Este usuário já está cadastrado");
      });
  };
  return (
    <Container>
      <img src={imageRegister} alt="imagem de Cadastro" />
      <ContainerRegister>
        <ContainerForm>
          <NavLink to="/">
            <img src={logo} alt="logo-habitue" />
          </NavLink>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Faça seu cadastro</h2>
            <Input
              register={register}
              icon={FiUser}
              name="username"
              label="Usuário"
              error={errors.username?.message}
              placeholder="Digite o usuário"
            />
            <div>
              <Input
                icon={FiLock}
                type="password"
                name="password"
                label="Senha"
                register={register}
                error={errors.password?.message}
                placeholder="Mínimo de 6 dígitos"
              />
              <Input
                type="password"
                icon={FiLock}
                name="passwordConfirm"
                label="Confirme senha"
                register={register}
                error={errors.passwordConfirm?.message}
                placeholder="Mínimo de 6 dígitos"
              />
            </div>
            <Input
              icon={FiMail}
              name="email"
              label="Email"
              register={register}
              error={errors.email?.message}
              placeholder="Digite seu e-mail"
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
