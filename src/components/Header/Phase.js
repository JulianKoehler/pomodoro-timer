import React, { useContext } from "react";
import styled from "styled-components";
import useTimer from "../../hooks/useTimer";
import ColorContext from "../../store/Color/color-context";
import PhaseContext from "../../store/Phase/phase-context";
import TimerContext from "../../store/Timer/timer-context";

const Phase = props => {
  const colorCtx = useContext(ColorContext);
  const phaseContext = useContext(PhaseContext);
  const timerContext = useContext(TimerContext);
  const { resetTimer } = useTimer();

  const changePhaseHandler = () => {
    phaseContext.setPhase(props.children);
    timerContext.setHasTimerStarted(false);
    timerContext.setIsTimerExpired(false);
    timerContext.setIsTimerPaused(false);
    resetTimer();
  };

  return (
    <PhaseContainer
      onClick={changePhaseHandler}
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
  cursor: pointer;
`;

const TextContent = styled.p`
  color: ${props => (props.active ? "black" : "var(--gray)")};
  opacity: ${props => (props.active ? "1" : "0.4")};
  transition: all 0.35s;

  &:hover {
    color: ${props => (props.active ? "black" : "var(--white)")};
    opacity: 1;
  }
`;
