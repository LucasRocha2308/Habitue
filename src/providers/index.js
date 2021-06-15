import { AuthProvider } from "./auth";
import { HabitsProvider } from "./habits";
import { UserProvider } from "./user";
const Providers = ({ children }) => {
  return (
    <HabitsProvider>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </HabitsProvider>
  );
};

export default Providers;
