import { ButtonProps } from "antd";
import { FC, ReactNode, memo } from "react";
import { ButtonStyled } from "./style";

interface ButtonPropsCus extends ButtonProps {
  children?: ReactNode;
  align?: "left" | "right" | "center";
  buttonType?: "primary" | "secondary" | "tertiary";
}

const Button: FC<ButtonPropsCus> = memo(
  ({ children, align, buttonType, ...rest }) => {
    return (
      <ButtonStyled {...rest} className={`${align} ${buttonType}`}>
        {children}
      </ButtonStyled>
    );
  }
);

Button.defaultProps = {
  children: "",
  align: "center",
  buttonType: "primary",
};

export default Button;
