import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const token = localStorage.getItem("@Habitue:token");
  const [goal, setGoal] = useState([]);

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
      .catch((err) => console.log(err));
  };
  const callGoal = () => {
    api
      .get(`goals/?group=${groupId}&page=1`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setGoal(res.data.results))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    callGoal();
    // eslint-disable-next-line
  }, [groupId]);
  console.log(goal);
  console.log("esse e de grupo", groupId);
  return (
    <GoalContext.Provider value={{ registerGoals, goal, setGroupId }}>
      {children}
    </GoalContext.Provider>
  );
};

export const useGoal = () => useContext(GoalContext);
