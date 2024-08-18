import React, { useEffect, useState } from "react";
import {
  Arrow,
  Body,
  ChildWrapper,
  Container,
  Exit,
  LogOut,
  Logo,
  Menu,
  MenuItem,
  Side,
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import Profile from "./profile";
import sidebar from "../../utils/sidebar.jsx";
import Title from "../Generics/title/title.jsx";
// import Navbar from "../Navbar";

const Sidebar = () => {
  const [open, setOpen] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const onclickLogo = () => {
    navigate("/");
  };

  useEffect(() => {
    const path = JSON.parse(localStorage.getItem("open"));
    setOpen(path || []);
  }, []);

  const onOpen = ({ id, path, children, title }, e) => {
    e.preventDefault();

    if (open?.includes(id)) {
      const data = open?.filter((v) => v !== id);
      localStorage.setItem("open", JSON.stringify(data));
      setOpen(data);
    } else {
      localStorage.setItem("open", JSON.stringify([...open, id]));
      setOpen([...open, id]);
    }
    if (!children) {
      navigate(path, { state: { parent: title } });
    }
  };

  const logOut = () => {
    localStorage.setItem("login", "false");
    navigate("/login");
    document.location.reload();
  };

  const onChildClick = (parent, child, path, e) => {
    e.preventDefault();
    navigate(path, { state: { parent, child } });
  };

  return (
    <Container>
      <Side>
        <Logo onClick={onclickLogo}>
          <Title />
        </Logo>
        <Profile />

        <Menu>
          {sidebar.map((parent) => {
            const { icon: Icon } = parent;
            const active = open?.includes(parent.id);
            return !parent.hidden ? (
              <React.Fragment key={parent.id}>
                <MenuItem
                  onClick={(e) => onOpen(parent, e)}
                  active={location.pathname.includes(parent.path).toString()}
                >
                  <MenuItem.Title>
                    <Icon className="icon" />
                    {parent.title}
                    {parent?.children && <Arrow active={active.toString()} />}
                  </MenuItem.Title>
                </MenuItem>

                <ChildWrapper active={active.toString()}>
                  {parent?.children?.map((child) => {
                    return (
                      <MenuItem
                        onClick={(e) =>
                          onChildClick(parent.title, child.title, child.path, e)
                        }
                        key={child?.id}
                        to={child.path}
                        active={location.pathname
                          ?.includes(child.path)
                          .toString()}
                      >
                        <MenuItem.Title>{child.title}</MenuItem.Title>
                      </MenuItem>
                    );
                  })}
                </ChildWrapper>
              </React.Fragment>
            ) : null;
          })}
        </Menu>

        <LogOut onClick={logOut}>
          <Exit />
          Chiqish
        </LogOut>
      </Side>

      {/* <Body>
        <Navbar />
        <Wrapper>
          <BroadCrumb />
          <Outlet />
        </Wrapper>
      </Body> */}
    </Container>
  );
};

export default Sidebar;
