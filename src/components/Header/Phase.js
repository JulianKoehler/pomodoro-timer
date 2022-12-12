import React, { useContext } from "react";
import styled from "styled-components";
import ColorContext from "../../store/Color/color-context";

const Phase = props => {
  const colorCtx = useContext(ColorContext);

  return (
    <PhaseContainer
      active={props.active}
      color={colorCtx.color}>
      <TextContent active={props.active}>{props.children}</TextContent>
    </PhaseContainer>
  );
};

export default Phase;

const PhaseContainer = styled.div`
  width: 120px;
  height: 48px;
  margin: 8px 0 7px 0;
  border-radius: 26.5px;
  background-color: ${props => (props.active ? props.color : "transparent")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContent = styled.p`
  color: ${props => (props.active ? "black" : "var(--gray)")};
  opacity: ${props => (props.active ? "1" : "0.4")};
`;
