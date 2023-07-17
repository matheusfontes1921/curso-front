import { createContext, useContext, useState } from "react";
import { getAuthorizationToken, setAuthorizationToken } from "../functions/connection/auth";
import { UserType } from "../../modules/login/types/UserType";
import { notification } from "antd";
type NotificationType = "success" | "info" | "warning" | "error";
interface NotificationProps {
  message: string;
  type: NotificationType;
  description?: string;
}
interface GlobalData {
  user?: UserType;
  notification?: NotificationProps;
}
interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

const GlobalContext = createContext({} as GlobalContextProps);
interface GlobalProviderProps {
  children: React.ReactNode;
}
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});
  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const setNotification = (message: string, type: NotificationType, description?: string) => {
    setGlobalData({
      ...globalData,
      notification: {
        message,
        type,
      },
    });
  };
  const setUser = (user: UserType) => {
    setGlobalData({
      ...globalData,
      user,
    });
  };
  return {
    notification: globalData.notification,
    user: globalData?.user,
    setUser,
    setNotification,
  };
};