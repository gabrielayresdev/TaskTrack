import styles from "./NotificationContent.module.sass";

interface INotificationContent {
  content: string;
  style?: React.CSSProperties | undefined;
}

const NotificationContent = ({
  content,
  style,
  ...args
}: INotificationContent) => {
  return (
    <div className={styles.wrapper} style={style} {...args}>
      {content}
    </div>
  );
};

export default NotificationContent;
