import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useAuth } from "../auth";
const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const token = localStorage.getItem("@Habitue:token");
  const [goal, setGoal] = useState([]);
  const { auth } = useAuth();
  const [groupId, setGroupId] = useState(
    localStorage.getItem(`@Habitue:Group`)
  );

  const registerGoals = (data, history) => {
    setGroupId(localStorage.getItem(`@Habitue:Group`));
    api
      .post(
        "goals/",
        { ...data, group: parseInt(groupId) },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((_) => {
        toast.success("Sucesso ao criar uma Meta");
        history.push("/group");
        callGoal();
      })
      .catch((_) => toast.error("Quantidade de caracteres excedida"));
  };
  const callGoal = () => {
    api
      .get(`goals/?group=${groupId}&page=1`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setGoal(res.data.results));
  };
  useEffect(() => {
    if (auth) {
      callGoal();
    }
    // eslint-disable-next-line
  }, [groupId]);

  return (
    <GoalContext.Provider value={{ groupId, registerGoals, goal, setGroupId }}>
      {children}
    </GoalContext.Provider>
  );
};

export const useGoal = () => useContext(GoalContext);
