import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* 
      <Route path="/login" component={Login} />
      <Route path="/habit" component={Habit} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} isPrivate /> */}
    </Switch>
  );
};

export default Routes;
