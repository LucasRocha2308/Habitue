import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useAuth } from "../auth";

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const token = localStorage.getItem("@Habitue:token");
  const [habit, setHabit] = useState([]);
  const { auth } = useAuth();

  const registerHabit = (data, history) => {
    api
      .post("habits/", data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((_) => {
        toast.success("Sucesso ao criar um hábito");
        history.push("/dashboard");
      })
      .catch((_) => {
        toast.error("Erro ao criar um hábito");
      });
    callHabits();
  };

  const callHabits = () => {
    api
      .get("habits/personal/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setHabit(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    callHabits();
    // eslint-disable-next-line
  }, [auth]);
  console.log(habit);

  const removeHabit = (id) => {
    api.delete(`habits/${id}/`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const newList = habit.filter((elem) => elem.id !== id);
    setHabit(newList);
  };

  return (
    <HabitsContext.Provider value={{ habit, removeHabit, registerHabit }}>
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
