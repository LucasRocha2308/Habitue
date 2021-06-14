import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habit, setHabit] = useState([]);

  api
    .get("habits/personal/")
    .then((res) => setHabit([...habit, res.data.results]))
    .catch((err) => console.log(err));

  return (
    <HabitsContext.Provider value={{ habit, setHabit }}>
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
