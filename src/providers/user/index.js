import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { useAuth } from "../auth/index";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { auth } = useAuth();
  const id = localStorage.getItem("@Habitue:id") || auth.user_id;
  const [user, setUser] = useState("");

  useEffect(() => {
    if (id) {
      api.get(`users/${id}/`).then((response) => {
        localStorage.setItem("@Habitue:id", id);
        const currentUser = response.data.username;
        setUser(currentUser);
        console.log(currentUser);
      });
    }
  }, [id]);
  console.log("usuario", user);
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
