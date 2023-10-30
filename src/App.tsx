import React from "react";
import styles from "./App.module.sass";
import NotificationsContainer from "./components/Shared/NotificationsContainer/NotificationsContainer";
import NotificationContextProvider from "./contexts/NotificationContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { RegisterContextLayout } from "./contexts/RegisterContext";
import UserContextProvider from "./contexts/UserContext";
import Home from "./pages/Home/Home";

function App() {
  return (
    <NotificationContextProvider>
      <UserContextProvider>
        <div className={styles.app}>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<RegisterContextLayout />}>
                <Route path="/register" element={<Register />} />
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
