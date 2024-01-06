import { FaBell, FaCommentDots, FaUmbrella } from "react-icons/fa";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { Tooltip } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="fixed top-[65px] left-0 h-screen w-[77px] m-0 flex flex-col shadow-lg ">
      <SidebarIcon
        icon={<FaCommentDots size={28} />}
        name="first"
        text="Forum"
      />
      <SidebarIcon icon={<FaBell size={28} />} text="Lost & Found" />
      <SidebarIcon
        icon={<RiNotificationBadgeFill size={28} />}
        text="Activity"
      />
      <SidebarIcon
        icon={<FaUmbrella size={28} text="Love" />}
        text="Love"
      />
    </div>
  );
};

const SidebarIcon = ({ icon, name, text }) => {

  const navigate = useNavigate();

  if (name) {
    return (
      <Tooltip content={text} placement="right" closeDelay={0}>
        <div className="sidebar-icon mt-7" onClick={() => navigate('/')}>{icon}</div>
      </Tooltip>
    );
  }
  return (
    <Tooltip content={text} placement="right" closeDelay={0}>
      <div className="sidebar-icon">{icon}</div>
    </Tooltip>
  );
};

export default Sidebar;
