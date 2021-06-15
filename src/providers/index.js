import { AuthProvider } from "./auth";
import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";
import { UserProvider } from "./user";
const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <HabitsProvider>
          <GroupsProvider>{children}</GroupsProvider>
        </HabitsProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Providers;
