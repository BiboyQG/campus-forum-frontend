import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/login.component";
import WelcomeLayout from "./component/welcome-layout-component";
import Navbarr from "./component/navbar.component";
import Forum from "./component/forum.component";
import Register from "./component/register.component";
import { ToastContainer } from "react-toastify";
import { Fragment } from "react";
import Reset from "./component/reset.component";
import UserSettings from "./component/settings/user-settings.component";

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<WelcomeLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset" element={<Reset />} />
        </Route>
        <Route path="/" element={<Navbarr />}>
          <Route index element={<Forum />} />
          <Route path="user-settings" element={<UserSettings />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
