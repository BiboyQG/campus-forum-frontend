import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Skeleton,
  ScrollShadow,
} from "@nextui-org/react";
import { AcmeLogo } from "./logo-and-icon/AcmeLogo.component";
import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { logout } from "../net";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar.component";
import { UserContext } from "../contexts/user.context";
import { Button, Input, Select, Space } from "antd";
const { Option } = Select;
import { AiOutlineProfile, AiOutlineLock } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";

export default function Navbarr() {
  const { user } = useContext(UserContext);
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");
  // const [registerTime, setRegisterTime] = useState("");
  let username = "";
  let email = "";
  if (user) {
    username = user.username;
    email = user.email;
  }
  console.log(user);
  // useEffect(() => {
  //   get("/api/user/info", (data) => {
  //     const { username, email, role, registerTime } = data;
  //     setUsername(username);
  //     setEmail(email);
  //     setRole(role);
  //     setRegisterTime(registerTime);
  //   });
  // }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout(() => {
      navigate("/login");
    });
  };

  const selectBefore = (
    <Select defaultValue="Forum">
      <Option value="Forum">Forum</Option>
      <Option value="Lost & Found">Lost & Found</Option>
      <Option value="Activity">Activity</Option>
      <Option value="Love">Love</Option>
    </Select>
  );

  return (
    <Fragment>
      <Navbar isBordered>
        <NavbarContent justify="start" as="div" onClick={() => navigate("/")}>
          <NavbarBrand className="mr-4 cursor-pointer">
            <AcmeLogo />
            <p className="hidden sm:block font-bold text-inherit">UIUC</p>
          </NavbarBrand>
        </NavbarContent>

        <Space.Compact
          style={{
            width: "50%",
          }}
        >
          <Input placeholder="Type to search..." addonBefore={selectBefore} />
          <Button type="default">Submit</Button>
        </Space.Compact>

        <NavbarContent as="div" className="items-center" justify="end">
          {user ? (
            <div className="text-right">
              <p className="text-[18px] line-[20px] font-bold">{username}</p>
              <p className="text-gray-400 text-[10px]">{email}</p>
            </div>
          ) : (
            <div className="w-2/5 flex flex-col gap-2">
              <Skeleton className="h-4 w-4/5 rounded-lg ml-auto" />
              <Skeleton className="h-2 w-full rounded-lg ml-auto" />
            </div>
          )}
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={username}
                size="sm"
                // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem
                key="profile"
                className="h-14 gap-2"
                textValue="Profile"
              >
                <p className="font-semibold -translate-y-1">Signed in as</p>
                {user ? (
                  <p className="font-semibold">{email}</p>
                ) : (
                  <Skeleton className="h-3 w-4/5 rounded-lg" />
                )}
              </DropdownItem>
              <DropdownItem
                key="profile_settings"
                textValue="Profile Settings"
                startContent={<AiOutlineProfile />}
              >
                Profile Settings
              </DropdownItem>
              <DropdownItem
                key="security_settings"
                textValue="Security Settings"
                startContent={<AiOutlineLock />}
                onClick={() => navigate("/user-settings")}
              >
                Security Settings
              </DropdownItem>
              <DropdownItem
                key="messages"
                textValue="Messages"
                startContent={<IoMailOutline />}
              >
                Messages
              </DropdownItem>
              <DropdownItem
                key="help_and_feedback"
                textValue="help_and_feedback"
                startContent={<MdOutlineFeedback />}
              >
                Help & Feedback
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onClick={handleLogout}
                textValue="Logout"
                startContent={<IoMdExit />}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
      <div className="flex">
        <Sidebar />
        <div className="ml-[77px] flex-1 bg-third dark:bg-fourth">
          <ScrollShadow size={0} className="h-[calc(100vh-64px)]">
            <div className="">
              <Outlet />
            </div>
          </ScrollShadow>
        </div>
      </div>
    </Fragment>
  );
}
