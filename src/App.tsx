import styles from "./App.module.sass";
import NotificationsContainer from "./components/NotificationsContainer/NotificationsContainer";
import NotificationContextProvider from "./contexts/NotificationContext";
import Authenticate from "./pages/Authenticate/Authenticate";

function App() {
  return (
    <NotificationContextProvider>
      <div className={styles.app}>
        <Authenticate />
        <NotificationsContainer />
      </div>
    </NotificationContextProvider>
  );
}

export default App;
