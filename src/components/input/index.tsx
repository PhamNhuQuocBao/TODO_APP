import { InputProps } from "antd";
import { InputStyled } from "./style";
import { FC, memo } from "react";

interface InputPropsCus extends InputProps {}

const Input: FC<InputPropsCus> = memo(({ ...rest }) => {
  return <InputStyled {...rest} />;
});

export default Input;
