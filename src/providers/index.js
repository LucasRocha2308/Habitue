import { AuthProvider } from "./auth";
import { UserProvider } from "./user";
const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
};

export default Providers;
