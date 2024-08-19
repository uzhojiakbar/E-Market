import React, { useEffect, useState } from "react";
import Input from "../Generics/Input/Input";
import { Container, SearchIcon } from "./style";
import { Button, Space } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import Time from "./time";

const Navbar = () => {
  const position = "start";
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Resize hodisasini tinglash
    window.addEventListener("resize", handleResize);

    // Cleanup function - Component unmounted bo'lganda listener ni olib tashlash
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Bo'sh dependency array - faqat bir marta o'rnatiladi va unmounted bo'lganda olib tashlanadi

  return (
    <Container currentWidth={`${width}px`}>
      <Input
        width={400}
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
        placeholder="Mahsulot qidirish..."
      />
      <Container.Right>
        <Button
          size={"large"}
          type="primary"
          icon={<PlusCircleOutlined />}
          iconPosition={position}
        >
          Mahsulot sotish
        </Button>
        <Button
          size={"large"}
          type="link"
          icon={<PlusCircleOutlined />}
          iconPosition={position}
        >
          Mahsulot qoshish
        </Button>

        <Time />
      </Container.Right>
    </Container>
  );
};

export default Navbar;
