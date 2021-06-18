import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { useAuth } from "../auth/index";
import { toast } from "react-toastify";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { auth } = useAuth();
  const token = localStorage.getItem("@Habitue:token") || "";
  const id = localStorage.getItem("@Habitue:id") || auth.user_id;
  const [user, setUser] = useState("");

  const changeUser = (name) => {
    api
      .patch(
        `/users/${id}/`,
        { username: name },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((_) => {
        toast.success("Seu nome foi alterado");
        callUser(id);
      })
      .catch((_) => {
        toast.error("Esse usuário já existe");
      });
  };

  const callUser = (id) => {
    api.get(`users/${id}/`).then((response) => {
      localStorage.setItem("@Habitue:id", id);
      const currentUser = response.data.username;
      setUser(currentUser);
    });
  };
  useEffect(() => {
    if (id) {
      callUser(id);
    }
  }, [id]);

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
