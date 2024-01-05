import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { AcmeLogo } from "./logo-and-icon/AcmeLogo.component";
import { SearchIcon } from "./logo-and-icon/SearchIcon.component";
import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { get, logout } from "../net";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar.component";

export default function Navbarr() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [registerTime, setRegisterTime] = useState("");

  useEffect(() => {
    get("/api/user/info", (data) => {
      const { username, email, role, registerTime } = data;
      setUsername(username);
      setEmail(email);
      setRole(role);
      setRegisterTime(registerTime);
    });
  }, []);
  

  const navigate = useNavigate();

  const handleLogout = () => {
    logout(() => {
      navigate("/login");
    });
  };

  return (
    <Fragment>
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <AcmeLogo />
            <p className="hidden sm:block font-bold text-inherit">BENG</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page" color="secondary">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search"
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
          <div className="text-right">
            <p className="text-[18px] line-[20px] font-bold">{username}</p>
            <p className="text-gray-400 text-[10px]">{email}</p>
          </div>
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
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{email}</p>
              </DropdownItem>
              <DropdownItem key="settings" textValue="My Settings">
                My Settings
              </DropdownItem>
              <DropdownItem key="team_settings" textValue="Team Settings">
                Team Settings
              </DropdownItem>
              <DropdownItem key="analytics" textValue="Analytics">
                Analytics
              </DropdownItem>
              <DropdownItem key="system" textValue="System">
                System
              </DropdownItem>
              <DropdownItem key="configurations" textValue="Configurations">
                Configurations
              </DropdownItem>
              <DropdownItem
                key="help_and_feedback"
                textValue="help_and_feedback"
              >
                Help & Feedback
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onClick={handleLogout}
                textValue="Logout"
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
      <Sidebar />
      <Outlet />
    </Fragment>
  );
}
