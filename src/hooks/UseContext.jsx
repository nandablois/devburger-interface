import {
  useContext,
  createContext,
  useState,
  useEffect,
  Children,
} from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const putUserData = (userInfo) => {
    setUserInfo(userInfo);

    localStorage.setItem("devburguer:userData", JSON.stringify(userInfo));
  };

  const logout = () => {
    localStorage.removeItem("devburguer:userData");
  };

  useEffect(() => {
    const userInfoLocalStorage = localStorage.getItem("devburguer:userData");

    if(userInfoLocalStorage){
      setUserInfo(JSON.parse(userInfoLocalStorage))
    }
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const userUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("userUser must be a valid context");
  }

  return context;
};
