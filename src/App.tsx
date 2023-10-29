import React from "react";
import styles from "./App.module.sass";
import NotificationsContainer from "./components/Shared/NotificationsContainer/NotificationsContainer";
import NotificationContextProvider from "./contexts/NotificationContext";
import Authenticate from "./pages/Authenticate/Authenticate";

function App() {
  React.useEffect(() => {
    fetch("http://localhost:8080/auth/test").then((r) => console.log(r));
  });
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
