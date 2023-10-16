import React from "react";
import SvgWarn from "../iconComponents/Icons/Warn";
import SvgXMark from "../iconComponents/Icons/XMark";
import SvgSuccess from "../iconComponents/Icons/Success";

type NotificationTypes = "Alert" | "Success";

interface INotification {
  type: NotificationTypes;
  message: string;
}

interface INotificationComposition {
  [key: string]: {
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    button: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    color: string;
    bgColor: string;
  };
}

interface INotificationContext {
  notifications: INotification[];
  createNotification: ({ type, message }: INotification) => void;
  NotificationComposition: INotificationComposition;
}

const NotificationComposition = {
  Alert: {
    icon: SvgWarn,
    button: SvgXMark,
    color: "#ffffff",
    bgColor: "#F76961",
  },
  Success: {
    icon: SvgSuccess,
    button: SvgXMark,
    color: "#ffffff",
    bgColor: "#0FC47D",
  },
};

const NotificationContext = React.createContext<INotificationContext | null>(
  null
);

export function useNotificationContext() {
  const context = React.useContext(NotificationContext);
  if (!context) throw new Error("useContext must be inside provider");
  else return context;
}

const NotificationContextProvider = ({ children }: React.PropsWithChildren) => {
  const [notifications, setNotifications] = React.useState<INotification[]>([]);

  function createNotification({ type, message }: INotification) {
    setNotifications((current) => [...current, { type, message }]);
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications: notifications,
        createNotification: createNotification,
        NotificationComposition: NotificationComposition,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
