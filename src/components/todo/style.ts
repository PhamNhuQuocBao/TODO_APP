import styled from "styled-components";

export const TodoStyle = styled.div`
  color: ${({ theme }) => theme.colors.violet};
  background-color: ${({ theme }) => theme.bg.light};
  padding: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;

  & .actions {
    display: flex;
    gap: 10px;

    .action-item {
      cursor: pointer;
    }
  }

  &.completed {
    .title {
      color: ${({ theme }) => theme.colors.green};
      text-decoration: line-through;
    }

    .actions {
      display: none;
    }
  }
`;
