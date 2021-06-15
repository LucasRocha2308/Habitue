import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useEffect } from "react";

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habit, setHabit] = useState([]);
  const token = localStorage.getItem("@Habitue:token");

  const registerHabit = (data, history) => {
    api
      .post("habits/", data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((_) => {
        toast.success("Sucesso ao criar um hábito");
        return history.push("/dashboard");
      })
      .catch((_) => {
        toast.error("Erro ao criar um hábito");
      });
  };

  useEffect(() => {
    if (habit.length) {
      api
        .get("habits/personal/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => setHabit([...habit, res.data.results]))
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line
  }, [habit]);

  return (
    <HabitsContext.Provider value={{ habit, setHabit, registerHabit }}>
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
