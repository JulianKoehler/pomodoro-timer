import React, { useContext } from "react";
import styled from "styled-components";
import useTimer from "../../hooks/useTimer";
import SettingsContext from "../../store/Settings/settings-context";
import TimerContext from "../../store/Timer/timer-context";

const Phase = props => {
  const { color, setPhase } = useContext(SettingsContext);
  const { setHasTimerStarted, setIsTimerExpired, setIsTimerPaused } = useContext(TimerContext);
  const { resetTimer } = useTimer();

  const changePhaseHandler = () => {
    setPhase(props.children);
    setHasTimerStarted(false);
    setIsTimerExpired(false);
    setIsTimerPaused(false);
    resetTimer();
  };

  return (
    <PhaseContainer
      onClick={changePhaseHandler}
      active={props.active}
      color={color}>
      <TextContent active={props.active}>{props.children.split("-").join(" ")}</TextContent>
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
