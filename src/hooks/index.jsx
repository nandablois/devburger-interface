import { UserProvider } from "./UseContext";

const AppProvider = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default AppProvider;
