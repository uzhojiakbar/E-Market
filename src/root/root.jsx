// Root component
import React, { useState } from "react";
import { RootContainer } from "./styled";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/home/home";
import Navbar from "../components/navbar/navbar";
import Login from "../pages/login";
import Sidebar from "../components/Sidebar";
import sidebar from "../utils/sidebar";
import { Toaster } from "react-hot-toast";
import useAuthRedirect from "../hooks/useAuthRedirect";

const Root = () => {
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  const nav = useNavigate();
  useAuthRedirect(setIsAuthChecking);

  if (isAuthChecking) {
    nav("/login");
    return (
      <div className="loaderWindow">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <RootContainer>
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
