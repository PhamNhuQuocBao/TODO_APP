import styled from "styled-components";
import { Button as ButtonAnt } from "antd";

export const ButtonStyled = styled(ButtonAnt)`
  display: flex;
  gap: 10px;
  align-items: center;
  border: none;
  height: auto;

  &.primary {
    background-color: ${({ theme }) => theme.colors.violet};
    &:hover {
      background: ${({ theme }) => theme.colors.violet};
    }
  }

  &.left {
    justify-content: start;
  }

  &.right {
    justify-content: end;
  }

  &.center {
    justify-content: center;
  }
`;
