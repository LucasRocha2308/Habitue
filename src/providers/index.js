import { AuthProvider } from "./auth";
import { HabitsProvider } from "./habits";
import { UserProvider } from "./user";
const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <HabitsProvider>{children}</HabitsProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Providers;
