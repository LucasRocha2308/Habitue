import { AuthProvider } from "./auth";
import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";
import { UserProvider } from "./user";
import { GoalProvider } from "./goals";
const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <HabitsProvider>
          <GroupsProvider>
            <GoalProvider>{children}</GoalProvider>
          </GroupsProvider>
        </HabitsProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Providers;
