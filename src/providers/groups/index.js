import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useAuth } from "../auth";

const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const token = localStorage.getItem("@Habitue:token");
  const [group, setGroup] = useState([]);
  const { auth } = useAuth();

  const registerGroup = (data, history) => {
    api
      .post("groups/", data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((_) => {
        toast.success("Sucesso ao criar um grupo");
        return history.push("/dashboard");
      })
      .catch((_) => {
        toast.error("Erro ao criar o grupo");
      });
  };

  useEffect(() => {
    api
      .get("groups/personal/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setGroup(res.data))
      .catch((err) => console.log(err));

    // eslint-disable-next-line
  }, [auth]);
  console.log(group);

  return (
    <GroupsContext.Provider value={{ group, setGroup, registerGroup }}>
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
