import { Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Route from "./route";
import Habit from "../pages/Habit";
import Group from "../pages/Group";
import RegisterHabit from "../pages/RegisterHabit";
import RegisterGroup from "../pages/RegisterGroup";
import RegisterGoal from "../pages/RegisterGoal";
import RegisterActivities from "../pages/RegisterActivities";
import SubscribeGroup from "../pages/SubscribeGroup";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/registerhabit" component={RegisterHabit} isPrivate />
      <Route path="/registergroup" component={RegisterGroup} isPrivate />
      <Route path="/habit" component={Habit} isPrivate />
      <Route path="/group" component={Group} isPrivate />
      <Route path="/registergoal" component={RegisterGoal} isPrivate />
      <Route path="/subscribegroup" component={SubscribeGroup} isPrivate />
      <Route
        path="/registeractivities"
        component={RegisterActivities}
        isPrivate
      />
    </Switch>
  );
};

export default Routes;
