import React, { useRef } from "react";
import { Container, Input } from "./style.js";
import { useNavigate } from "react-router-dom";

const GenericInput = (props) => {
  const { iconleft, iconright } = props;
  const InputRef = useRef("");

  const nav = useNavigate();

  const onSearch = (e) => {
    if (e === "Enter") {
      nav(`/search/${InputRef.current.value}`);
    }
  };

  return (
    <Container {...props}>
      {iconleft && iconleft}
      <Input
        ref={InputRef}
        onKeyUp={(e) => {
          onSearch(e.key);
        }}
        {...props}
      />
      {iconright && iconright}
    </Container>
  );
};

export default GenericInput;
