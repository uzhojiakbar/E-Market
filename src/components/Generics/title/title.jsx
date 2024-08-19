import React from "react";
import { TitleContainer, TitleLogo, TitleText } from "./styled";
import { useNavigate } from "react-router-dom";
import config from "../../../utils/config";

const Title = ({ title, nav }) => {
  const navigate = useNavigate();
  const NavigateFunc = (url) => {
    let current = document.location.pathname;
    if (url !== current) {
      navigate(url);
    }
  };
  return (
    <TitleContainer onClick={() => NavigateFunc(nav || "/")}>
      <TitleText>{title || config.siteTitle || "Davr Leader"}</TitleText>
      <TitleLogo>
        <i className={config.siteLogoFontAwesome || "fa-solid fa-book"}></i>
      </TitleLogo>
    </TitleContainer>
  );
};

export default Title;
