import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useAuth } from "../auth";
const ActivitiesContext = createContext();

export const ActivitieProvider = ({ children }) => {
  const token = localStorage.getItem("@Habitue:token");
  const [activitie, setActivitie] = useState([]);
  const { auth } = useAuth();
  const [groupId, setGroupId] = useState(
    localStorage.getItem(`@Habitue:Group`)
  );

  const registerActivitie = (data, history) => {
    setGroupId(localStorage.getItem(`@Habitue:Group`));
    api
      .post(
        "activities/",
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
        callActivitie();
      })
      .catch((err) => console.log(err));
  };
  const callActivitie = () => {
    api
      .get(`activities/?group=${groupId}&page=1`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setActivitie(res.data.results))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (auth) {
      callActivitie();
    }
    // eslint-disable-next-line
  }, [groupId]);

  return (
    <ActivitiesContext.Provider
      value={{ registerActivitie, activitie, setGroupId }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivitie = () => useContext(ActivitiesContext);
