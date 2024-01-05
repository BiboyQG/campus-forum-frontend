import Welcome from "../routes/welcome.component";
import { Outlet } from "react-router-dom";

function WelcomeLayout() {
  return (
    <Welcome>
      <Outlet />
    </Welcome>
  );
}

export default WelcomeLayout;
