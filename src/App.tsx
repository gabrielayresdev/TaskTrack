import React from "react";
import styles from "./App.module.sass";
import NotificationsContainer from "./components/Shared/NotificationsContainer/NotificationsContainer";
import NotificationContextProvider from "./contexts/NotificationContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { RegisterContextLayout } from "./contexts/RegisterContext";

function App() {
  return (
    <NotificationContextProvider>
      <div className={styles.app}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<RegisterContextLayout />}>
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <NotificationsContainer />
      </div>
    </NotificationContextProvider>
  );
}

export default App;
