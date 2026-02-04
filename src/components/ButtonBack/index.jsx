import PropTypes from "prop-types";
import { ContainerButton } from "./styles";

export function ButtonBack({ children, ...props}) {
  return <ContainerButton {...props}>{children}</ContainerButton>;
}

ButtonBack.prototype ={
  children: PropTypes.string
}