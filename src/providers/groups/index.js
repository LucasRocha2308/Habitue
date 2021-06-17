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
        history.push("/dashboard");
        callGroup();
      })
      .catch((_) => {
        toast.error("Erro ao criar o grupo");
      });
  };

  const callGroup = () => {
    api
      .get("groups/subscriptions/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setGroup(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (auth) {
      callGroup();
    }
    // eslint-disable-next-line
  }, [auth]);
  const removeGroup = (id) => {
    api
      .delete(`groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((_) => {
        toast.success("Sucesso ao deletar o grupo");
      });

    const newList = group.filter((elem) => elem.id !== id);
    setGroup(newList);
  };

  return (
    <GroupsContext.Provider
      value={{ group, setGroup, registerGroup, removeGroup }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
