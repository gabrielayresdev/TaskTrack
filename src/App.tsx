import styles from "./App.module.sass";
import NotificationsContainer from "./components/Shared/NotificationsContainer/NotificationsContainer";
import NotificationContextProvider from "./contexts/NotificationContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { RegisterContextLayout } from "./contexts/RegisterContext";
import Home from "./pages/Home/Home";
import Authenticate from "./pages/Authenticate/Authenticate";
import AuthContextProvider from "./contexts/Auth/AuthContext";
import RequireAuth from "./contexts/Auth/RequireAuth";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TaskContextProvider from "./contexts/TasksContext";

function App() {
  return (
    <NotificationContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className={styles.app}>
              <Routes>
                <Route path="/" element={<Authenticate Form={Login} />} />
                <Route path="/login" element={<Authenticate Form={Login} />} />
                <Route element={<RegisterContextLayout />}>
                  <Route
                    path="/register"
                    element={<Authenticate Form={Register} />}
                  />
                </Route>
                <Route
                  path="/home"
                  element={
                    <RequireAuth>
                      <TaskContextProvider>
                        <Home />
                      </TaskContextProvider>
                    </RequireAuth>
                  }
                />
              </Routes>

              <NotificationsContainer />
            </div>
          </LocalizationProvider>
        </BrowserRouter>
      </AuthContextProvider>
    </NotificationContextProvider>
  );
}

export default App;
