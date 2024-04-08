import styled from "styled-components";
import { Input as InputAnt } from "antd";

export const InputStyled = styled(InputAnt)`
  background: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  border: ${({ theme }) => theme.border.violet};
  font-family: "Roboto", sans-serif;

  &:focus,
  &:hover {
    background: transparent;
    border: ${({ theme }) => theme.border.violet};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
