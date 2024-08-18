import styled from "styled-components";
import arrow from "../../assets/icons/arrow.svg?react";
import exit from "../../assets/icons/exit.svg?react";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;
const Side = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 280px;
  min-width: 280px;
  max-width: 280px;
  background-color: white;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Body = styled.div`
  flex: 1;
  overflow: hidden;
  overflow-y: scroll;
  min-width: calc(1440px - 280px);
  height: 100vh;
`;

const Wrapper = styled.div`
  margin: 16px;
  background-color: white;
`;

const Logo = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #f8fafc;
  cursor: pointer;

  z-index: 1;
  position: sticky;
  top: 0;
`;

const LogOut = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 280px;
  position: sticky;
  bottom: 0;
  margin-top: auto;
  font-size: 14px;
  font-weight: 500;
  line-height: 28px;
  color: #253e5f;

  border-top: 1px solid #f8fafc;
  cursor: pointer;

  padding: 16px 24px;

  &:hover {
    color: var(--activeColor);
    background-color: #f8fafc;

    & path {
      fill: var(--activeColor);
    }
  }
`;
const Exit = styled(exit)``;

// Profil

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 48px;
  margin: 23px 32px 24px 24px;
`;
ProfileContainer.Img = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

ProfileContainer.Name = styled.h2`
  width: 168px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--primaryColor);
`;
ProfileContainer.Email = styled.h2`
  width: 165px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--secondaryColor);
`;

// Menu

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(NavLink)`
  text-decoration: none;
  color: ${({ active }) =>
    active === "true" ? "var(--activeColor)" : "var(--primaryColor)"};
  :hover {
    cursor: pointer;
    color: var(--activeColor);
    background-color: #f8fafc;
    .icon {
      & path {
        fill: var(--activeColor);
      }
    }
    & path {
      fill: var(--activeColor);
    }
  }
  & path {
    fill: ${({ active }) => active === "true" && "var(--activeColor)"};
  }

  background-color: ${({ active }) =>
    active === "true" ? "#f8fafc" : "inherit"};
`;

MenuItem.Title = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  .icon {
    margin-right: 16px;
  }
  background-color: inherit;
`;

const Arrow = styled(arrow)`
  margin-left: auto;
  transform: ${({ active }) => active === "true" && "rotate(90deg)"};
  transition: all 0.1s;
`;

const ChildWrapper = styled.div`
  padding-left: 35px;
  height: ${(props) => (props?.active === "true" ? "fit-content" : "0px")};
  overflow: ${(props) => (props?.active === "true" ? "visible" : "hidden")};
`;

export {
  Exit,
  Arrow,
  MenuItem,
  Menu,
  Container,
  Side,
  Body,
  Wrapper,
  Logo,
  LogOut,
  ProfileContainer,
  ChildWrapper,
};
