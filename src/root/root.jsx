import React, { useEffect } from "react";
import "./style.css";
import { RootContainer } from "./styled";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/home/home";
import Navbar from "../components/navbar/navbar";
import Login from "../pages/login";
import Sidebar from "../components/Sidebar";
import sidebar from "../utils/sidebar";
import { Toaster } from "react-hot-toast";
import CheckUser from "../hooks/useCheckUser";

let init = 0;
const Root = () => {
  const { isUser } = CheckUser();

  useEffect(() => {
    if (init == 0 && isUser() === false) {
      nav("/login");
      console.log("2");
    }
    init = 1;
  });

  const nav = useNavigate();
  if (init == 0 && isUser() === false) {
    console.log("3");
    return (
      <>
        <RootContainer>
          <Login></Login>
          <Toaster />
        </RootContainer>
      </>
    );
  }
  return (
    <>
      <RootContainer>
        {/* <Navbar /> */}
        <Sidebar />
        <div>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />

            {sidebar.map((v) => {
              if (v.children?.length > 0) {
                return v.children.map((child) => {
                  return (
                    <Route
                      key={child.id}
                      path={child.path}
                      element={child.element}
                    />
                  );
                });
              }
              return <Route key={v.id} path={v.path} element={v.element} />;
            })}

            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </div>
      </RootContainer>

      <Toaster />
    </>
  );
};

export default Root;

[{ name: "Mahsulotlar" }, { name: "Hisobotlar" }];
