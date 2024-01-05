import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/login.component";
import WelcomeLayout from "./component/welcome-layout-component";
import Navbarr from "./component/navbar.component";
import Home from "./component/home.component";
import Register from "./component/register.component";
import { ToastContainer } from "react-toastify";
import { Fragment } from "react";
import Reset from "./component/reset.component";

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
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
