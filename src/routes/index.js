import { Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Route from "./route";
import Habit from "../pages/Habit";
import RegisterHabit from "../pages/RegisterHabit";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/registerhabit" component={RegisterHabit} />
      <Route path="/habit" component={Habit} isPrivate />
      {/*
      
      <Route path="/dashboard" component={Dashboard} isPrivate /> */}
    </Switch>
  );
};

export default Routes;
