import styles from "./App.module.sass";
import NotificationsContainer from "./components/Shared/NotificationsContainer/NotificationsContainer";
import NotificationContextProvider from "./contexts/NotificationContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { RegisterContextLayout } from "./contexts/RegisterContext";
import UserContextProvider from "./contexts/UserContext";
import Home from "./pages/Home/Home";
import Authenticate from "./pages/Authenticate/Authenticate";

function App() {
  return (
    <NotificationContextProvider>
      <UserContextProvider>
        <div className={styles.app}>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Authenticate Form={Login} />} />
              <Route element={<RegisterContextLayout />}>
                <Route
                  path="/register"
                  element={<Authenticate Form={Register} />}
                />
              </Route>
              <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
          <NotificationsContainer />
        </div>
      </UserContextProvider>
    </NotificationContextProvider>
  );
}

export default App;
