import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("@Habitue:token") || "";

  const [auth, setAuth] = useState(token);

  const signIn = (userData, history) => {
    api
      .post("sessions/", userData)
      .then((response) => {
        localStorage.setItem("@Habitue:token", response.data.access);
        const decodedToken = jwt_decode(response.data.access);
        setAuth(decodedToken);
        toast.success("Você foi Logado");
        history.push("/dashboard");
      })
      .catch((_) =>
        toast.error("Falha na autenticação, verifique seus dados!!")
      );
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
