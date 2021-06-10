import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      {/* 
      <Route path="/login" component={Login} />
      <Route path="/habit" component={Habit} />
      <Route path="/register" component={Register} />
      */}
    </Switch>
  );
};

export default Routes;
