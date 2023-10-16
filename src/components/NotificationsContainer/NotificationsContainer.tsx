import { useNotificationContext } from "../../contexts/NotificationContext";
import removeAnimate from "../../utils/removeAnimate";
import Notification from "../Notification/Index";
import styles from "./NotificationsContainer.module.sass";

export const NotificationsContainer = () => {
  const { notifications, NotificationComposition } = useNotificationContext();

  return (
    <div className={styles.wrapper}>
      {notifications.map((notification, index) => {
        const { color, bgColor, icon, button } =
          NotificationComposition[notification.type];
        return (
          <Notification.Root
            time={3000}
            key={index}
            style={{ backgroundColor: bgColor }}
          >
            <Notification.Icon
              Icon={icon}
              style={{ height: "30px", width: "30px" }}
              iconProps={{ fill: "#FFF9FB" }}
            />
            <Notification.Content
              content={notification.message}
              style={{ color: color }}
            />
            <Notification.Button
              Icon={button}
              iconProps={{ fill: bgColor }}
              onClick={({ currentTarget }) => {
                if (currentTarget.parentElement) {
                  removeAnimate(currentTarget.parentElement);
                }
              }}
            />
          </Notification.Root>
        );
      })}
    </div>
  );
};

export default NotificationsContainer;
