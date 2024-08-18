import React from "react";
import Input from "../Generics/Input/Input";
import { Container, SearchIcon } from "./style";

const Navbar = () => {
  return (
    <Container>
      <Input
        width={500}
        borderradius={8}
        height={40}
        iconleft={<SearchIcon />}
        fontWeight={500}
        fontSize={14}
        lineheight={20}
        placeholderstyle={{
          color: "#bbc3cd",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: 20,
        }}
        placeholder="Search"
      />
    </Container>
  );
};

export default Navbar;
