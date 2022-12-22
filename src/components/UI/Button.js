import { useContext } from "react";
import styled from "styled-components";
import SettingsContext from "../../store/Settings/settings-context";

const Button = props => {
  const { color } = useContext(SettingsContext);

  return (
    <Btn
      onClick={props.onClick}
      className={props.className}
      color={color}>
      {props.children}
    </Btn>
  );
};

export default Button;

const Btn = styled.button`
  background-color: ${props => props.color};
  border-radius: 1.65625em;
  font-size: 1em;
  font-weight: 700;
  font-family: inherit;
  color: white;
  border: none;
  padding: 1em 3em;
  transition: box-shadow 0.35s;

  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
