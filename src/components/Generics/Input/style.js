import styled from "styled-components";
import getValue from "../../../hooks/getStyleValue";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: ${({ width }) => width && getValue(width)};
  height: ${({ height }) => height && getValue(height)};
  max-width: ${({ width }) => width && getValue(width)};

  overflow: hidden;

  border: 1px solid var(--secondaryColor);
  border-radius: 8px;
  border-radius: ${({ borderradius }) =>
    borderradius && getValue(borderradius)};
  background-color: white;
`;

const Input = styled.input`
  flex: 1;
  outline: none;
  border-radius: 8px;
  height: 36px;

  width: ${({ width }) => width && getValue(width)};

  height: ${({ height }) => height && getValue(height)};

  max-width: ${({ width }) => width && getValue(width)};

  border: 0;

  color: ${({ color }) => (color ? color : "#000")};

  font-size: ${({ fontSize }) => fontSize && getValue(fontSize)};

  font-weight: ${({ fontWeigth }) => fontWeigth && getValue(fontWeigth)};

  line-height: ${({ lineheight }) => lineheight && getValue(lineheight)};

  border-radius: ${({ borderradius }) =>
    borderradius && getValue(borderradius)};

  &::placeholder {
    color: ${({ placeholderstyle }) =>
      placeholderstyle?.color ? placeholderstyle?.color : "#bbc3cd"};

    font-size: ${({ placeholderstyle }) =>
      placeholderstyle?.fontSize && getValue(placeholderstyle?.fontSize)};

    font-weight: ${({ placeholderstyle }) =>
      placeholderstyle?.fontWeigth && getValue(placeholderstyle?.fontWeigth)};

    line-height: ${({ placeholderstyle }) =>
      placeholderstyle?.lineHeight && getValue(placeholderstyle?.lineHeight)};
  }
`;

export { Container, Input };
