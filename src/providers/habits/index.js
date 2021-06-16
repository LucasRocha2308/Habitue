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
        callHabits();
      })
      .catch((_) => {
        toast.error("Erro ao criar um hábito");
      });
  };

  const callHabits = () => {
    api
      .get("habits/personal/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        const list = res.data.filter((elem) => !elem.achieved);
        setHabit(list);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    callHabits();
    // eslint-disable-next-line
  }, [auth]);

  const removeHabit = (id) => {
    api.delete(`habits/${id}/`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const newList = habit.filter((elem) => elem.id !== id);
    setHabit(newList);
  };

  const checkHabit = (habit) => {
    api
      .patch(
        `habits/${habit.id}/`,
        { achieved: true },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((_) => {
        toast.success("Sucesso ao completar um hábito");
        callHabits();
      })
      .catch((_) => {
        toast.error("Erro ao completar um hábito");
      });
  };

  return (
    <HabitsContext.Provider
      value={{ habit, removeHabit, registerHabit, checkHabit }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
