import styled from "styled-components";

import search from "../../assets/icons/search.svg?react";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 63px;
  position: sticky;
  top: 0;

  padding: 0 16px 0 24px;
  background-color: white;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 500px;
  width: fit-content;
  height: 40px;

  border: 1px solid var(--secondaryColor);
  border-radius: 8px;
  background-color: white;
`;

const Input = styled.input`
  flex: 1;
  outline: none;
  border-radius: 8px;
  height: 36px;

  border: 0;

  color: #bbc3cd;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  &::placeholder {
    color: #bbc3cd;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`;

const SearchIcon = styled(search)`
  margin: 0 16px;
`;

// navbar right / time wrapper

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Timer = styled.div`
  color: ${({ status }) =>
    status ? "var(--secondaryColor)" : "var(--primaryColor)"};
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
`;

export { Container, InputWrapper, Input, SearchIcon, Section, Timer };
